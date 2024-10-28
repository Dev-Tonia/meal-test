<template>
  <BaseModal title="Send Broadcast" :is-open="isOpen" @close="$emit('closeModal')">
    <template #content>

      <form :onSubmit="handleSubmit(handleSendBroadcast)" class="px-16 ">

        <div class="flex flex-col gap-4">
          <CustomInput v-model="subject" v-bind="subjectProps" name="subject" class="w-full" inputType="text"
            label="Subject" placeholder="Enter Subject" />
          <CustomTextArea v-model="message" v-bind="messageProps" name="message" class="w-full" label="Message"
            placeholder="Enter message" />
          <CustomInput v-model="emails" v-bind="emailsProps" class="w-full" name="emails" inputType="text"
            label="Recievers email" placeholder="Seperate emails with comma" />
          <div class="flex items-center gap-x-2">
            <input v-model="sendToAll" v-bind="sendToAllProps" name="sendToAll" class="accent-mt-secondary rounded-md"
              type="checkbox" id="checkbox" />
            <label class="text-gray-600 text-sm" for="checkbox">Send to all vendors</label>
          </div>
        </div>

        <MTButton class="mt-10" :load-state="loading" text="Send Broadcast" iconName="bxl:codepen" />
      </form>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { z } from "zod";

const loading = ref(false);
const props = defineProps({
  isOpen: Boolean,
})
interface SendBroadcastPayloadInterface {
  subject: string; // Required
  message: string; // Required
  emails?: string | null; // Optional, can be null
  sendToAll?: boolean; // Optional, defaults to false
}

const emailListSchema = z
  .string()
  .optional()
  .nullable()
  .refine((val) => {
    if (!val) return true; // Allow null or undefined
    const emails = val.split(',').map(email => email.trim());
    return emails.every(email => /^\S+@\S+\.\S+$/.test(email)); // Simple email regex
  }, {
    message: "Must be a valid comma-separated list of emails.",
  });

const schema = toTypedSchema(
  z.object({
    subject: z
      .string({
        required_error: "Subject is required",
      })
      .min(2, {
        message: "Subject cannot be empty",
      }),

    message: z
      .string({
        required_error: "Last name is required",
      })
      .min(20, {
        message: "Message is too short",
      }),

    emails: emailListSchema,

    sendToAll: z.boolean().default(false),
  }).refine(data => data.emails || data.sendToAll, {
    message: "You must provide an email or select 'Send to All'.",
    path: ["emails"],
  }),


);

const { defineField, handleSubmit } = useForm({
  validationSchema: schema,
});

const [subject, subjectProps] = defineField("subject");
const [message, messageProps] = defineField("message");
const [emails, emailsProps] = defineField("emails");
const [sendToAll, sendToAllProps] = defineField("sendToAll");

const handleSendBroadcast = async (data: SendBroadcastPayloadInterface) => {
  console.log("🚀 ~ handleSendBroadcast ~ data:", data)

}

</script>

<style lang="scss" scoped></style>