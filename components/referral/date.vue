<!-- <script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
} from "@internationalized/date";
import { CalendarIcon } from "@radix-icons/vue";
// import { Label } from "radix-vue";
import { ref } from "vue";
import { ErrorMessage } from "vee-validate";

const df = new DateFormatter("en-US", {
  dateStyle: "long",
});

const value = ref<DateValue>();

const props = defineProps({
  placeholder: {
    type: String,
  },
  label: {
    type: String,
  },
});
</script>

<template>
  <div class="">
    <label class="text-sm mb-2 inline-block">{{ label }}</label>
    <Popover>
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          :class="
            cn(
              'w-full justify-start text-left font-normal',
              !value && 'text-muted-foreground'
            )
          "
        >
          <CalendarIcon class="mr-2 h-4 w-4" />
          {{
            value ? df.format(value.toDate(getLocalTimeZone())) : placeholder
          }}
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0">
        <Calendar v-model="value" initial-focus />
      </PopoverContent>
    </Popover>

    <ErrorMessage
      :duration="0.5"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      :name="name"
      class="text-red-400 absolute top-[80px] left-0 text-[13px] transition-all"
    />
  </div>
</template> -->

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
  CalendarDate,
} from "@internationalized/date";
import { CalendarIcon } from "@radix-icons/vue";
import { ref, watch } from "vue";
import { useField } from "vee-validate";

const df = new DateFormatter("en-US", {
  dateStyle: "long",
});

const props = defineProps({
  placeholder: {
    type: String,
    default: "Select date...",
  },
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const { value, errorMessage } = useField(props.name, {
  initialValue: undefined,
});

const dateValue = ref<Date | undefined>();

// Type-safe event handler
const handleDateChange = (date: Date | undefined) => {
  dateValue.value = date;
  value.value = date;
};

// Watch for external value changes
watch(value, (newValue) => {
  dateValue.value = newValue as Date | undefined;
});
</script>

<template>
  <div class="relative">
    <label class="text-sm mb-2 inline-block">{{ label }}</label>
    <Popover>
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          :class="
            cn(
              'w-full justify-start text-left font-normal',
              !dateValue && 'text-muted-foreground',
              errorMessage && 'border-red-500'
            )
          "
        >
          <CalendarIcon class="mr-2 h-4 w-4" />
          {{ dateValue ? df.format(dateValue) : placeholder }}
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0">
        <Calendar
          :model-value="
            dateValue
              ? new CalendarDate(
                  dateValue.getFullYear(),
                  dateValue.getMonth() + 1,
                  dateValue.getDate()
                )
              : undefined
          "
          @update:model-value="
            (date) =>
              handleDateChange(
                date ? new Date(date.year, date.month - 1, date.day) : undefined
              )
          "
          initial-focus
          class="rounded-md border"
        />
      </PopoverContent>
    </Popover>
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <p v-if="errorMessage" class="text-red-500 text-sm mt-1">
        {{ errorMessage }}
      </p>
    </transition>
  </div>
</template>
