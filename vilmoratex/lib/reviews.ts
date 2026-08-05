export type Review = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    name: "Mona El-Sayed",
    role: "Boutique Owner, Alexandria",
    quote:
      "VilmoraTex has been our private label partner for two seasons now. Sample turnaround is fast, and the finishing quality matches brands we used to import.",
    rating: 5,
  },
  {
    name: "Ahmed Farouk",
    role: "Operations Manager, Al Nour International School",
    quote:
      "We switched our entire school uniform program to VilmoraTex last year. The fabric consumption breakdown by age group made budgeting for 900 students straightforward for the first time.",
    rating: 5,
  },
  {
    name: "Dr. Heba Kamal",
    role: "Procurement Lead, Private Hospital Group",
    quote:
      "Reliable delivery, consistent sizing across batches, and a fabric that actually survives industrial laundering. That combination is harder to find than it should be.",
    rating: 4.5,
  },
  {
    name: "Karim Hassan",
    role: "Founder, Menswear Startup Brand",
    quote:
      "Started with a 50-piece OEM trial run. The factory was upfront about lead times and MOQs from day one, and the finished shirts matched our tech pack exactly.",
    rating: 5,
  },
];
