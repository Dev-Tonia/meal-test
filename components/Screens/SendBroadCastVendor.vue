<template>
  <BaseModal
    title="Send Broadcast to Vendors"
    :is-open="isOpen"
    @close="$emit('closeModal')"
  >
    <template #content>
      <form :onSubmit="handleSubmit(handleSendBroadcast)" class="px-16">
        <div class="flex flex-col gap-4">
          <CustomInput
            v-model="subject"
            v-bind="subjectProps"
            name="subject"
            class="w-full"
            inputType="text"
            label="Subject"
            placeholder="Enter Subject"
          />

          <CustomTextArea
            v-model="message"
            v-bind="messageProps"
            name="message"
            class="w-full"
            label="Message"
            placeholder="Enter message"
          />

          <div class="flex gap-y-2 flex-col">
            <label class="text-gray-600 text-sm" for="recipient"
              >Recipient</label
            >

            <multiselect
              :disabled="sendToAll"
              v-model="emails"
              v-bind="emailsProps"
              :options="allVendors"
              :multiple="true"
              placeholder="Select recipient"
              label="name"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              track-by="name"
            >
              <template #selection="{ values, search, isOpen }">
                <span
                  class="multiselect__single"
                  v-if="values.length"
                  v-show="!isOpen"
                  >{{ values.length }} recipients selected</span
                >
              </template>
            </multiselect>

            <ErrorMessage
              :duration="0.5"
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1 }"
              name="emails"
              class="text-red-400 left-0 text-[13px] transition-all"
            />
          </div>

          <div class="flex items-center gap-x-2">
            <input
              :disabled="emails?.length! > 0"
              v-model="sendToAll"
              unselectable="off"
              v-bind="sendToAllProps"
              name="sendToAll"
              class="accent-mt-secondary rounded-md"
              type="checkbox"
              id="sendToAll"
            />
            <label
              class="text-gray-600 text-sm"
              :class="{ 'text-gray-300': emails?.length! > 0 }"
              :disabled="emails?.length! > 0"
              for="sendToAll"
              >Send to all Vendors</label
            >
          </div>
          <div class="flex items-center gap-x-2">
            <input
              v-model="sendEmail"
              v-bind="sendEmailProps"
              name="sendEmail"
              class="accent-mt-secondary rounded-md"
              type="checkbox"
              id="sendEmail"
            />
            <label class="text-gray-600 text-sm" for="sendEmail"
              >Send to Mail</label
            >
          </div>
        </div>

        <MTButton
          class="mt-10"
          :load-state="loading"
          text="Send Broadcast"
          iconName="bxl:codepen"
        />
      </form>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import axios from "axios";
import { useForm } from "vee-validate";
import Multiselect from "vue-multiselect";
import { toast } from "vue3-toastify";
import { BroadcastSchema } from "~/lib/schema";
import authHeader from "~/services/authHeader";
import type { SendBroadcastPayloadInterface } from "~/types/@types";

const loading = ref(false);
const allVendors = ref<{ email: string; name: string }[]>([]);

//
const props = defineProps({
  isOpen: Boolean,
});

const getAllVendors = async () => {
  const response = await axios.get(
    `https://api-staging.mealtrips.com/api/admin/vendors`,
    {
      headers: authHeader(),
    },
  );
  const data = response.data.data;
  const e = data.data.map((vendor: { email: string; fullname: string }) => {
    return {
      email: vendor.email,
      name: vendor.fullname,
    };
  });
  allVendors.value = e;
};

onMounted(() => {
  getAllVendors();
});

const { defineField, handleSubmit, resetForm } = useForm({
  validationSchema: BroadcastSchema,
});

const [subject, subjectProps] = defineField("subject");
const [message, messageProps] = defineField("message");
const [emails, emailsProps] = defineField("emails");
const [sendToAll, sendToAllProps] = defineField("sendToAll");
const [sendEmail, sendEmailProps] = defineField("sendEmail");

const handleSendBroadcast = async (
  form_data: SendBroadcastPayloadInterface,
) => {
  const vendorEmails = form_data.emails?.map((email) => email.email);
  const { data, error } = await useApiCall("/admin/broadcast", {
    headers: authHeader(),
    method: "POST",
    body: {
      subject: form_data.subject,
      message: form_data.message,
      reciever_email: vendorEmails,
      sendToAll: form_data.sendToAll,
      send_email: form_data.sendEmail,
    },
  });
  if (data.value) {
    //ts-ig
    toast.success(`Broadcast sent successfully`);
    resetForm()
  } else {
    toast.error(`${error.value?.message}`);
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
