"use client";

import { useActionState } from "react";
import { SubmitContact } from "@/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { contactSchema } from "@/lib/zodSchemas";

const Form = () => {
  const [lastResult, action, isPending] = useActionState(
    SubmitContact,
    undefined
  );

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: contactSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      className="space-y-8"
    >
      <input name="name" type="text" id="name" placeholder="Nombre" />
      <p style={{ color: "red" }}>{fields.name.errors}</p>
      <input
        name="email"
        className="bg-gray-200 rounded-3xl py-6"
        type="email"
        id="email"
        placeholder="Email"
      />
      <p style={{ color: "red" }}>{fields.email.errors}</p>
      <input name="phone" type="tel" id="phone" placeholder="Teléfono" />
      <p style={{ color: "red" }}>{fields.phone.errors}</p>
      <textarea
        name="message"
        cols="30"
        rows="10"
        placeholder="Mensaje"
        id="message"
      ></textarea>
      <p style={{ color: "red" }}>{fields.message.errors}</p>
      <input type="submit" value="Enviar" />
      {/* <div className="grid w-full gap-4 mb-2">
        <Label className=" font-semibold" htmlFor="name">
          Name
        </Label>
        <Input
          name="name"
          className="bg-gray-200 rounded-3xl py-6"
          type="text"
          id="name"
          placeholder="John Carter"
        />
        <p className="text-red-500 text-sm">{fields.name.errors}</p>
      </div> */}
      {/* <div className="grid w-full gap-4 mb-2">
        <Label className=" font-semibold" htmlFor="email">
          Email
        </Label>
        <Input
          name="email"
          className="bg-gray-200 rounded-3xl py-6"
          type="email"
          id="email"
          placeholder="example@email.com"
        />
        <p className="text-red-500 text-sm">{fields.email.errors}</p>
      </div> */}
      {/* <div className="sm:col-span-2 grid w-full gap-4 mb-2">
        <Label className=" font-semibold" htmlFor="phone">
          Phone
        </Label>
        <Input
          name="phone"
          className="bg-gray-200 rounded-3xl py-6  "
          type="tel"
          id="phone"
          placeholder="(123) 456-789"
        />
      </div>
      <p className="text-red-500 text-sm">{fields.phone.errors}</p> */}
      {/* <div className="sm:col-span-2 grid w-full gap-4 mb-2">
        <Label className=" font-semibold" htmlFor="message">
          Message
        </Label>
        <Textarea
          name="message"
          className="bg-gray-200 rounded-3xl py-6  "
          placeholder="Please type your message here..."
          id="message"
        />
        <p className="text-red-500 text-sm">{fields.message.errors}</p>
      </div>
      <p className="text-red-500 text-sm sm:col-span-2">{form.errors}</p>
      <Button
        disabled={isPending}
        className="w-full luxury-button rounded-none py-4 text-lg tracking-wide uppercase"
      >
        {isPending ? "Loading..." : "Send Message"}
      </Button> */}
    </form>
  );
};

export default Form;
