import { defineField, defineType } from "sanity";

export const stan = defineType({
  name: "stan",
  title: "Stan",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Ime stana",
      type: "string",
      description: "Naziv koji se prikazuje na stranici, npr. 'Tip A'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "kat",
      title: "Kat",
      type: "string",
      description: "npr. 'Prizemlje', '1. kat', '2. kat', '3. kat'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dostupnost",
      title: "Dostupnost",
      type: "string",
      options: {
        list: [
          { title: "Dostupno", value: "dostupno" },
          { title: "Rezervirano", value: "rezervirano" },
          { title: "Prodano", value: "prodano" },
        ],
        layout: "radio",
      },
      initialValue: "dostupno",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      kat: "kat",
      dostupnost: "dostupnost",
    },
    prepare({ title, kat, dostupnost }) {
      return {
        title: title ?? "Neimenovan stan",
        subtitle: [kat, dostupnost].filter(Boolean).join(" · "),
      };
    },
  },
});
