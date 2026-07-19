import { defineField, defineType } from "sanity";

const katOptions = [
  { title: "Prizemlje", value: "prizemlje" },
  { title: "1. kat", value: "kat-1" },
  { title: "2. kat", value: "kat-2" },
  { title: "3. kat", value: "kat-3" },
];

const katLabels: Record<string, string> = Object.fromEntries(
  katOptions.map((k) => [k.value, k.title])
);

export const stan = defineType({
  name: "stan",
  title: "Stan",
  type: "document",
  fields: [
    defineField({
      name: "tip",
      title: "Tip stana",
      type: "string",
      description:
        "Kojem tipu (A–E) ovaj stan pripada. Tip određuje tlocrt, opis, karakteristike i fotografije koje se prikazuju na webu — te ostaju definirane u kodu, ovdje se bira samo kojem tipu ovaj konkretan stan odgovara.",
      options: {
        list: [
          { title: "Tip A", value: "A" },
          { title: "Tip B", value: "B" },
          { title: "Tip C", value: "C" },
          { title: "Tip D", value: "D" },
          { title: "Tip E", value: "E" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ime",
      title: "Ime stana",
      type: "string",
      description: "Naziv koji se prikazuje uz stan, npr. 'Tip A'.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "kat",
      title: "Kat",
      type: "string",
      description: "Na kojem katu zgrade se ovaj stan nalazi.",
      options: {
        list: katOptions,
        layout: "radio",
      },
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
    defineField({
      name: "oznaka",
      title: "Oznaka stana (opcionalno)",
      type: "string",
      description:
        "Interna oznaka/broj stana radi lakšeg snalaženja u Studiju, npr. 'A-1'. Ne prikazuje se javno na webu.",
    }),
  ],
  preview: {
    select: {
      ime: "ime",
      tip: "tip",
      kat: "kat",
      dostupnost: "dostupnost",
      oznaka: "oznaka",
    },
    prepare({ ime, tip, kat, dostupnost, oznaka }) {
      const title = ime || `Tip ${tip ?? "?"}`;
      return {
        title: oznaka ? `${title} — ${oznaka}` : title,
        subtitle: [katLabels[kat] ?? kat, dostupnost].filter(Boolean).join(" · "),
      };
    },
  },
});
