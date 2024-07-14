
```markdown
# V-Select Component

A Vue.js custom select component with search functionality, option navigation, and async loading.

## Features

- **Search**: Filter options by entering search terms.
- **Keyboard Navigation**: Navigate through options using the keyboard.
- **Async Loading**: Display a loader when options are being loaded.
- **Customizable**: Define label and value columns for options.

## Installation

### npm

```bash
npm install @your-username/v-select
```

### yarn

```bash
yarn add @your-username/v-select
```

## Usage

### Import and Register the Component

```javascript
import VSelect from '@your-username/v-select';

export default {
  components: {
    VSelect
  }
};
```

### Template

```html
<template>
  <div>
    <VSelect
      :options="options"
      v-model="selectedValue"
      placeholder="Select an option..."
      labelColumn="name"
      valueColumn="id"
    />
  </div>
</template>
```

### Script

```javascript
<script>
export default {
  data() {
    return {
      options: [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' }
      ],
      selectedValue: null
    };
  }
};
</script>
```

### Styles

```css
<style scoped>
/* Your custom styles for the v-select component */
.v-select {
  position: relative;
}

.v-select-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  position: fixed;
  top: 100%;
}

.v-select-options {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  padding: 10px;
  z-index: 1;
  height: 213px;
  max-height: 270px;
  overflow-y: auto !important;
}

.v-select-options ul {
  list-style: none;
  width: 100% !important;
}

.v-select-option {
  padding: 10px;
  cursor: pointer;
}

.v-select-option-selected {
  background-color: #f0f0f0;
}

/* Loader styles */
.loader {
  --d: 22px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  color: #25b09b;
  box-shadow: 
    calc(1 * var(--d)) calc(0 * var(--d)) 0 0,
    calc(0.707 * var(--d)) calc(0.707 * var(--d)) 0 1px,
    calc(0 * var(--d)) calc(1 * var(--d)) 0 2px,
    calc(-0.707 * var(--d)) calc(0.707 * var(--d)) 0 3px,
    calc(-1 * var(--d)) calc(0 * var(--d)) 0 4px,
    calc(-0.707 * var(--d)) calc(-0.707 * var(--d)) 0 5px,
    calc(0 * var(--d)) calc(-1 * var(--d)) 0 6px;
  animation: l27 1s infinite steps(8);
}

@keyframes l27 {
  100% {transform: rotate(1turn);}
}
</style>
```

## Props

- `options` (Array, required): List of options to display.
- `value` (String|Number, required): Selected value (used for v-model).
- `placeholder` (String, default: ''): Placeholder text for the input.
- `labelColumn` (String, required): Column name for option labels.
- `valueColumn` (String, required): Column name for option values.

## Example

```html
<template>
  <div>
    <VSelect
      :options="[
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' }
      ]"
      v-model="selectedValue"
      placeholder="Select an option..."
      labelColumn="name"
      valueColumn="id"
    />
  </div>
</template>
```

## License

MIT
```

This README file provides detailed information on the features, installation, usage, example code, and styling for your V-Select component. Replace `@your-username/v-select` with your actual package name.