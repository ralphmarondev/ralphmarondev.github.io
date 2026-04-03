<script setup lang="ts">
const props = defineProps<{ color?: string }>()
</script>

<template>
  <span
		  class="px-2 py-0.5 rounded-lg font-medium"
		  :class="props.color ? props.color : 'bg-pink-50 text-pink-700'"
  >
    <slot />
  </span>
</template>

<!--
### **Description**

* **Purpose:**
  A small inline “pill” component to highlight **keywords, important notes, or any text**.
  Perfect for tutorials, tooltips, or inline badges.

* **Props:**

  * `color` (optional) — accepts Tailwind CSS classes for background & text color (e.g., `bg-green-50 text-green-700`).
    Defaults to a pink theme.

* **Slot:**
  The text you want to highlight goes inside the `<Pill>` tag.

---

### **Usage Examples**

```vue
<Pill>func</Pill>
<Pill>Important</Pill>
<Pill color="bg-yellow-50 text-yellow-700">Warning</Pill>
```

**Result:**

* First two use default pink theme.
* Last one uses custom yellow theme for emphasis.

-->