# 🧠 Project Approach

This project implements a six-step waste management skip order process using modern front-end technologies such as TailwindCSS, Vite, keeping in mind clean, maintainable React code, reusable components, responsiveness, and UI/UX principles.

## 🛠 Tech Stack

- ⚛️ React (with TypeScript)
- 💨 TailwindCSS
- ⚡ Vite for fast bundling and development

## 🧩 Architecture & Component Structure

### State Management

- Used React's built-in useState and Context API via `src/context/FormContext.tsx` to manage and share form state across components using hooks.

### Step Management

- Custom step navigation via `src/components/StepperController.tsx`.
  - Responsive design: vertical side-pane to the left on desktop for clarity.
  - Mobile: dropdown UI on top of the view to conserve space and focus user attention.

### Order Process Flow

- Handled through `src/components/OrderProcessWizard.tsx`.
  - General logic for the whole process goes here.
  - Controls back/next navigation with icon-only buttons (ideal for mobile).
  - Displays customer care number for support during order.

### Step Views

- `src/components/DefaultForm.tsx`: Shared layout shell for all steps.
- `src/components/SkipSelectionView.tsx`: UI for skip selection.

## 📱 Responsive UI Strategy

### Skip Selection Layout

- **Mobile**: Horizontally scrollable card layout for easy thumb interaction.
- **Desktop**: Grid layout to maximize information visibility.

### Stepper Navigation

- **Desktop**: Side-pane showing completed/current/locked steps.
- **Mobile**: Condensed into dropdown for simplicity.

## 🃏 Skip Card Design

**Component**: `src/components/SkipCard.tsx`

**Design Decisions**:

- Emphasized skip size (centered, large, bold) — highest priority.
- Removed background image for clarity.
- Displayed price and period prominently beneath size.
- Added separator line to distinguish high-priority and lower-priority info.
- Status indicators (e.g., allowed on road, heavy waste support, forbidden) shown with icons and colored tags.
- Entire card is clickable (no button) for better mobile UX.
- Displays check icon in top-right corner for selected skip.

## 🔁 Reusability & Separation of Concerns

- `src/components/FlagIndicator.tsx`: Reusable icon/flag indicator for skip properties.
- `src/components/LoadingSkelton.tsx`: Reusable loading state placeholder.
- `src/services/SkipService.ts`: Isolated API service for skip-related data.
- `src/models/Skip.ts`: Shared type-safe model definition.
- `src/utilities/PriceUtilities.ts`: Contains price calculation logic per business rules.
- `src/styles/scrollbar.css`: Hides native scrollbars for aesthetic consistency.

## 📝 TODOs

- Extract stepper controller into a reusable library.
- Improve error handling.
- Apply company-specific color palette and themes (day/night).
- Add form validation for each step.

---

## ⚙️ Installation Instructions

To set up and run the project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/kumarawmpapp/waste-manager-5.git
cd waste-manager-5
```

### 2. Install Dependencies

Make sure you have Node.js (preferably ≥ 16) installed.

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

The app should now be running at: provided localhots port.

### 4. Build for Production

```bash
npm run build
# or
yarn build
```

### 5. Preview Production Build (Optional)

```bash
npm run preview
# or
yarn preview
```
