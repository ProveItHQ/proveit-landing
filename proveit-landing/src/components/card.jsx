"use client";

import React from "react";

export default function StatisticCard({
    title,
    unit,
    heading,
    subheading,
    titleColor = "text-black",
    unitColor = "text-blue-500",
    headingColor = "text-gray-700",
    subheadingColor = "text-gray-500",
    TitleComponent = "h2",
    HeadingComponent = "h3",
    SubheadingComponent = "p",
}) {
    return (
        <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col items-start space-y-2 border border-gray-200">
            <TitleComponent className={`text-4xl font-bold ${titleColor}`}>
                {title} <span className={`text-3xl ${unitColor}`}>{unit}</span>
            </TitleComponent>
            <HeadingComponent className={`text-lg font-medium ${headingColor}`}>{heading}</HeadingComponent>
            <SubheadingComponent className={`text-sm ${subheadingColor}`}>{subheading}</SubheadingComponent>
        </div>
    );
}
