"use client";

import React from "react";
import Section from "@/components/Section";
import { TagList, TagListItem } from "@/components/TagList";
import { data as services } from "@/data/services";

const ServicesDetails = () => {
  const renderParagraph = (text) => {
    const parts = text.split(/(House 58)/);
    return parts.map((part, index) =>
      part === "House 58" ? (
        <span key={index} className="font-heavy text-white">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <div className="pb-20 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40 bg-house-black">
      <div className="pt-10">
        <h1 className="text-center text-white md:text-8xl text-5xl font-heavy">
          SERVICES
        </h1>
      </div>
      {services.map((service) => (
        <Section
          key={service.id}
          title={service.title}
          image={{ src: service.image }}
          className="h-screen"
        >
          <div className="space-y-6 text-base text-neutral-300">
            <p>{renderParagraph(service.paragraph1)}</p>
            <p>{renderParagraph(service.paragraph2)}</p>
            <p>{renderParagraph(service.paragraph3)}</p>
          </div>
          <div className="mt-8" />
          <TagList className="mt-4">
            {service.tags.map((tag) => (
              <TagListItem key={tag}>{tag}</TagListItem>
            ))}
          </TagList>
        </Section>
      ))}
    </div>
  );
};

export default ServicesDetails;
