# 📚 Gutenberg Book Browser

A modern web application built using **Next.js**, **Bun**, **Tailwind CSS**, and **TypeScript** that lets users explore and read books from the [Project Gutenberg](https://www.gutenberg.org/) collection by genre and keywords.

---

## ✨ Features

- 🔍 **Genre Selection:** Homepage displays a set of buttons for available book genres.
- 📚 **Book Listings:** Infinite scroll-based listing of books in a selected category.
- 🧠 **Search Functionality:** Smart filtering by book title or author, while preserving the selected genre.
- 🌐 **Preferred Reading Formats:** Books open in browser in the best available format (HTML > PDF > TXT).
- ⚠️ **Error Handling:** If no viewable version is found, an alert box notifies the user.
- 🌙 **Theme Support:** Light and Dark theme toggles.
- 🌍 **Language Selector:** Basic i18n support for multilingual audiences.
- 📱 **Responsive UI:** Mobile-first, accessible design with a clean and minimal interface.

---

## 🗂️ Project Structure

```
.
├── app                      # Next.js App Router structure
│   ├── api                 # API route handlers (if any)
│   ├── books               # Dynamic routes for book listings
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Shared layout and theme wrapper
│   └── page.tsx            # Home screen with category buttons
├── bun.lock                # Bun lock file
├── components              # Reusable UI components
│   ├── book-card.tsx
│   ├── book-categories.tsx
│   ├── book-list.tsx
│   ├── language-selector.tsx
│   ├── search-bar.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   └── ui                  # Generic UI components
├── components.json         # Optional component metadata/config
├── hooks                   # Custom React hooks
│   ├── use-debounce.tsx
│   ├── use-language.tsx
│   ├── use-mobile.tsx
│   ├── use-theme.tsx
│   ├── use-toast.ts
│   └── use-translation.tsx
├── images                  # App images (used in light/dark mode)
├── lib                     # Utility functions and types
│   ├── api.ts
│   ├── translations.ts
│   ├── types.ts
│   └── utils.ts
├── public                  # Static assets
│   ├── assets
│   ├── fonts
│   └── placeholder.svg
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.mjs         # Next.js configuration
├── postcss.config.mjs      # PostCSS plugins
├── package.json
├── next-env.d.ts
```

---

## 🧠 How It Works

1. **Home Page (`page.tsx`)**

   - Lists all available book genres as buttons.
   - Selecting a genre routes to `/books/XYZ`.

2. **Book List Page**

   - Fetches books with cover images and the selected genre from the Project Gutenberg API.
   - Implements infinite scrolling for smooth UX.
   - Typing in the search bar filters results using title/author, **while preserving** the selected genre.
   - Debounced input for optimized API requests.

3. **Book View Links**
   - On clicking a book card:
     - The app searches for a viewable format in this order:
       - `text/html`
       - `application/pdf`
       - `text/plain`
     - Opens the first available link in a **new browser tab**.
     - If none are available, shows a toast or alert: `No viewable version available`.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Package Manager + Runtime:** [Bun](https://bun.sh/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** TypeScript
- **Deployment:** Vercel / Netlify / Custom

---

## 🚀 Running Locally

```bash
bun install
bun run dev
```

Visit `http://localhost:3000` to start browsing!

---

## ⚠️ Caveats & Notes

- Books without cover images are **excluded** using `mime_type` filter in the API call.
- Zip files are ignored as non-viewable formats.
- Smart fallback ensures that users can always access the best available book format.

---

## 📸 Screenshots

### 🔆 Light Theme

#### Homepage

![Light Theme Gutenberg](https://raw.githubusercontent.com/adityapandey9/gutenberg-project-ui/main/images/light-theme-gutenberg.png)

#### Book List

![Light Theme Books](https://raw.githubusercontent.com/adityapandey9/gutenberg-project-ui/main/images/light-theme-books.png)

---

### 🌙 Dark Theme

#### Homepage

![Dark Theme Gutenberg](https://raw.githubusercontent.com/adityapandey9/gutenberg-project-ui/main/images/dark-theme-gutenberg.png)

#### Book List

![Dark Theme Books](https://raw.githubusercontent.com/adityapandey9/gutenberg-project-ui/main/images/dark-theme-books.png)

---

## 📄 License

MIT License

---

## 📬 Contact

For feature requests or bug reports, please open an [issue](https://github.com/) or connect.
