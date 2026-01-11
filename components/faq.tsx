"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  value: string;
  question: string;
  answer: string;
}

export const FAQSection = () => {
  const faqItems: FAQItem[] = [
    {
      value: "item-1",
      question: "Ölçü alımı ve keşif ücretli mi?",
      answer: "Hayır. Ölçü alımı ve keşif hizmetimiz tamamen ücretsizdir.",
    },
    {
      value: "item-2",
      question: "Teslim süresi ne kadar?",
      answer:
        "Projenin kapsamına göre değişmekle birlikte, ortalama teslim süresi 10–25 gün arasındadır..",
    },
    {
      value: "item-3",
      question: "Kullanılan malzemeler nelerdir?",
      answer:
        "Projeye ve tercihinize göre kaliteli MDF, suntalam ve donanımlar kullanıyoruz. Malzeme detayları keşif sonrası netleştirilir..",
    },
    {
      value: "item-4",
      question: "Hangi bölgelerde hizmet veriyorsunuz?",
      answer:
        "İstanbul bölgesinde hizmet veriyoruz. Detaylı bilgi için bizimle iletişime geçebilirsiniz..",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sıkça Sorulan Sorular
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-card p-4 border border-border rounded-lg overflow-hidden">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help */}
      </div>
    </section>
  );
};
