<template>
  <div class="v-select">
    <!-- Input field displays the selected option's label -->
    <input @click="showInputAndOptions" :value="selectedOption ? selectedOption[labelColumn] : search" class="form-select" readonly />
    <div v-if="showInputField && showOptions" class="v-select-options rounded-bottom w-100 shadow p-2">
      <!-- Input field for searching/selecting options -->
      <input
        v-if="showInputField"
        type="text"
        class="form-control "
        v-model="search"
        @input="$emit('input', search)" 
        @keydown.down="navigateDown"
        @keydown.up="navigateUp"
        @keydown.enter="selectOption"
        @blur="closeDropdown"
        :placeholder="placeholder"
      />
      <!-- Display filtered options -->
        <div v-if="filteredOptions==''" class="w-100 h-100 d-flex justify-content-center align-items-center">
            <div class="loader"></div>
        </div> 
        <ul v-if="showOptions" class=" border-0 w-100 list-unstyled">
            <li
            v-for="(option, index) in filteredOptions"
            :key="index"
            @click="selectOption(option)"
            :class="{ 'v-select-option-selected ': isSelected(option) }"
            class="list-unstyled border-top py-1"
            >
            {{ option[labelColumn] }} <!-- Display the label column -->
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    // New props for column names
    labelColumn: {
      type: String,
      required: true,
    },
    valueColumn: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      search: this.value,
      selectedIndex: -1,
      showOptions: false,
      showInputField: false,
      selectedOption: null,
    };
  },
  computed: {
    filteredOptions() {
      return this.options.filter((option) => {
        return option[this.labelColumn].toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    showInputAndOptions() {
      this.showInputField = !this.showInputField;
      this.showOptions = !this.showOptions;
      this.search=''
    },
    async closeDropdown() {
        await setTimeout(() => {
            this.showOptions = false;
            this.showInputField = false;
        }, 1000);
    },
    navigateDown() {
      if (this.selectedIndex < this.filteredOptions.length - 1) {
        this.selectedIndex++;
        this.search = this.filteredOptions[this.selectedIndex][this.labelColumn];
      }
    },
    navigateUp() {
      if (this.selectedIndex > 0) {
        this.selectedIndex--;
        this.search = this.filteredOptions[this.selectedIndex][this.labelColumn];
      }
    },
    async selectOption(option) {
      await (this.$emit('input', option[this.valueColumn])); // Emit the selected option's value for v-model
      await (this.search = option[this.labelColumn]);
      await (this.showOptions = false);
      await (this.showInputField = false);
      await (this.selectedOption = option); // Set the selected option
    },
    isSelected(option) {
      return option[this.valueColumn] === this.value;
    },
  },
};
</script>

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
.v-select-options ul{
    list-style: none;
    widows: 100% !important;
}

.v-select-option {
  padding: 10px;
  cursor: pointer;
}

.v-select-option-selected {
  background-color: #f0f0f0;
}

/* HTML: <div class="loader"></div> */
.loader {
  --d:22px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  color: #25b09b;
  box-shadow: 
    calc(1*var(--d))      calc(0*var(--d))     0 0,
    calc(0.707*var(--d))  calc(0.707*var(--d)) 0 1px,
    calc(0*var(--d))      calc(1*var(--d))     0 2px,
    calc(-0.707*var(--d)) calc(0.707*var(--d)) 0 3px,
    calc(-1*var(--d))     calc(0*var(--d))     0 4px,
    calc(-0.707*var(--d)) calc(-0.707*var(--d))0 5px,
    calc(0*var(--d))      calc(-1*var(--d))    0 6px;
  animation: l27 1s infinite steps(8);
}
@keyframes l27 {
  100% {transform: rotate(1turn)}
}
</style>
