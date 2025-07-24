"use client";

import { useEffect, useState } from "react";
import { BiCodeAlt as SkillsIcon } from "react-icons/bi";
import { useTranslations } from "next-intl";

import SkillCard from "./SkillCard";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { STACKS } from "@/common/constants/stacks";
import MarqueeElement from "@/common/components/elements/MarqueeElement";

const SkillList = () => {
  const t = useTranslations("HomePage");

  const [hasMounted, setHasMounted] = useState(false);
  const [shuffledStacks, setShuffledStacks] = useState<
    Array<[string, JSX.Element]>
  >([]);

  useEffect(() => {
    setHasMounted(true);

    const stacks = Object.entries(STACKS);
    const shuffled = [...stacks].sort(() => Math.random() - 0.5);
    setShuffledStacks(shuffled);
  }, []);

  if (!hasMounted) return null;

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title={t("skills.title")} icon={<SkillsIcon />} />
        <SectionSubHeading>
          <p>{t("skills.sub_title")}</p>
        </SectionSubHeading>
      </div>

      <div className="flex flex-col space-y-1 overflow-x-hidden">
        {Array.from({ length: 2 }, (_, index) => {
          const slider = [...shuffledStacks].sort(() => Math.random() - 0.5);
          return (
            <MarqueeElement
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              {slider.map(([name, icon], i) => (
                <SkillCard key={i} name={name} icon={icon} />
              ))}
            </MarqueeElement>
          );
        })}
      </div>
    </section>
  );
};

export default SkillList;
