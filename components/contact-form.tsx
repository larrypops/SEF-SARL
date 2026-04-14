"use client";

import { FormEvent, useState } from "react";

import { company } from "@/lib/data";

type FormState = {
  name: string;
  phone: string;
  vehicle: string;
  city: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  vehicle: "",
  city: "",
  message: ""
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Demande de contact - ${formState.vehicle || "Circuit d’injection diesel"}`);
    const body = encodeURIComponent(
      [
        `Nom : ${formState.name}`,
        `Téléphone : ${formState.phone}`,
        `Véhicule / équipement : ${formState.vehicle}`,
        `Ville : ${formState.city}`,
        "",
        "Message :",
        formState.message
      ].join("\n")
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setFormState(initialState);
  }

  return (
    <form id="formulaire" onSubmit={handleSubmit} className="panel p-7 md:p-10">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="md:col-span-1">
          <label htmlFor="name" className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formState.name}
            onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
            className="mt-3 w-full rounded-[1.2rem] border border-slate-200 bg-white px-4 py-3.5 text-slate-950 transition focus:border-teal"
          />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="phone" className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formState.phone}
            onChange={(event) => setFormState((current) => ({ ...current, phone: event.target.value }))}
            className="mt-3 w-full rounded-[1.2rem] border border-slate-200 bg-white px-4 py-3.5 text-slate-950 transition focus:border-teal"
          />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="vehicle" className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Véhicule ou équipement
          </label>
          <input
            id="vehicle"
            name="vehicle"
            type="text"
            required
            value={formState.vehicle}
            onChange={(event) => setFormState((current) => ({ ...current, vehicle: event.target.value }))}
            className="mt-3 w-full rounded-[1.2rem] border border-slate-200 bg-white px-4 py-3.5 text-slate-950 transition focus:border-teal"
          />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="city" className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Ville
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            value={formState.city}
            onChange={(event) => setFormState((current) => ({ ...current, city: event.target.value }))}
            className="mt-3 w-full rounded-[1.2rem] border border-slate-200 bg-white px-4 py-3.5 text-slate-950 transition focus:border-teal"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Décrivez la panne ou le besoin
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formState.message}
            onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
            className="mt-3 w-full rounded-[1.2rem] border border-slate-200 bg-white px-4 py-3.5 text-slate-950 transition focus:border-teal"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="button-dark">
          Envoyer la demande
        </button>
        <p className="max-w-xl text-sm leading-7 text-slate-500">
          {submitted
            ? "Votre message a été préparé dans votre application e-mail. Vous pouvez aussi passer par WhatsApp pour une réponse plus rapide."
            : "Le formulaire prépare un message complet à l’adresse e-mail de SEF SARL. Pour un échange immédiat, utilisez également WhatsApp."}
        </p>
      </div>
    </form>
  );
}
