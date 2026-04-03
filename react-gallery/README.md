# 🖼️ React Gallery App

A clean and responsive image gallery application built with **React.js** that fetches real photos from the [Picsum Photos API](https://picsum.photos/) with smooth pagination and fade-in animations.

---

## 👨‍💻 Author

**Adnan Anjum**

---

## 🚀 Live Features

- ✅ Fetches real images from Picsum Photos API
- ✅ Smooth **fade-in animation** on every image load
- ✅ **Pagination** — navigate through pages of images
- ✅ **Loading state** — shows feedback while fetching
- ✅ **Error handling** — gracefully handles failed requests
- ✅ Responsive dark UI built with Tailwind CSS
- ✅ Click any image to visit the original source

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | UI & Component Architecture |
| Axios | HTTP requests to the API |
| useState | Managing data, index, loading, error states |
| useEffect | Triggering API calls on page change |
| Tailwind CSS | Styling & animations |
| Picsum Photos API | Source of real images |

---

## 📁 Project Structure

```
src/
├── App.jsx              # Root component — state, logic, API calls
└── components/
    └── Cards.jsx        # Displays image grid, pagination buttons, loading & error states
```

---

## ⚙️ How It Works

### Fetching Data
When the app loads or the page index changes, `useEffect` triggers `getData()` which calls the Picsum API with the current page number and a limit of 5 images.

```jsx
useEffect(() => {
  getData();
}, [index]);
```

### API Call with Error Handling
```jsx
const getData = async () => {
  try {
    setLoading(true);
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=5`
    );
    setUserData(response.data);
  } catch (err) {
    setError("Something went wrong!");
  } finally {
    setLoading(false);
  }
};
```

- `try` → attempts the API call
- `catch` → saves error message if it fails
- `finally` → always stops the loading state whether it succeeds or fails

### Pagination
The `index` state controls which page of images is fetched. Prev/Next buttons increment or decrement it, with a guard preventing going below page 0.

```jsx
// Prev — guarded
if (index > 0) setIndex(index - 1);

// Next
setIndex(index + 1);
```

### Fade-in Animation
Each image starts invisible (`opacity-0`) and fades in smoothly once fully loaded using the `onLoad` event. The `key={elem.id}` forces React to treat each image as a brand new element on page change, triggering the animation every time.

```jsx
<img
  key={elem.id}
  className="opacity-0 transition-opacity duration-1000"
  onLoad={(e) => e.target.classList.replace("opacity-0", "opacity-100")}
/>
```

### Props Flow
All state lives in `App.jsx` and only the necessary props are passed down to `Cards.jsx`:

```jsx
<Cards
  loading={loading}
  error={error}
  index={index}
  setIndex={setIndex}
  userData={userData}
/>
```

---

## 🧩 Component Breakdown

### `App.jsx`
The brain of the app. Owns all state (`userData`, `index`, `loading`, `error`) and the `getData` function. Passes only required props to `Cards`.

### `Cards.jsx`
Handles all the UI — displays the image grid, loading message, error message, page index indicator, and Prev/Next buttons. Has no state of its own.

---

## 🏃 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/anjumhere/React-learning-.git
cd React-learning-/gallery-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

### 4. Open in browser
```
http://localhost:5173
```

---

## 📸 App Preview

```
┌─────────────────────────────────────────────┐
│                                         [2] │  ← current page
│  ┌───────┐ ┌───────┐ ┌───────┐             │
│  │  img  │ │  img  │ │  img  │             │
│  │       │ │       │ │       │             │
│  │Author │ │Author │ │Author │             │
│  └───────┘ └───────┘ └───────┘             │
│                                             │
│         [ Prev ]        [ Next ]            │
└─────────────────────────────────────────────┘
```

---

## 📚 Concepts Covered

- **Axios** — making HTTP GET requests to a public API
- **useEffect with dependencies** — re-fetching data when state changes
- **useState** — managing multiple states in one component
- **try/catch/finally** — handling async errors gracefully
- **Props** — passing only necessary data to child components
- **Conditional rendering** — showing loading and error states
- **CSS transitions** — smooth fade-in using Tailwind + onLoad event
- **React key prop** — forcing re-animation on page change

---

## 🔮 Future Improvements

- [ ] Add a search bar to filter by author
- [ ] Add image lightbox on click
- [ ] Show total number of pages
- [ ] Add skeleton loading cards instead of plain text
- [ ] Save favourite images to localStorage

---

## 🌐 API Reference

This app uses the free [Picsum Photos API](https://picsum.photos/).

```
GET https://picsum.photos/v2/list?page={page}&limit={limit}
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | number | Page number to fetch |
| `limit` | number | Number of images per page |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
