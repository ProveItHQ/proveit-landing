# proveit-landing

Landing Page for ProveIt

# How to use the Framer components

Your components are exported to ../C:\Users\sanch\Desktop\Academics\SFU\Opportunities\Idea\proveit-landing\proveit-landing\framer folder. Now please install the unframer runtime dependency:

    npm install unframer

Each component has a .Responsive variant that allows you to specify different variants for different breakpoints.

You can use the components like this (try copy pasting the code below into your React app):

```ts
import "./../C:UserssanchDesktopAcademicsSFUOpportunitiesIdeaproveit-landingproveit-landing\framer/styles.css";
// this file imported below is generated when you run `npm run framer`
import AccordionTimelineFramerComponent from "./../C:UserssanchDesktopAcademicsSFUOpportunitiesIdeaproveit-landingproveit-landing\framer/component/accordion-timeline";

export default function App() {
  return (
    <div className="flex flex-col">
      <AccordionTimelineFramerComponent
        exampleFramerVariable="example"
        style={{ width: "100%" }}
      />
      {/* use .Responsive for components with breakpoints */}
      <AccordionTimelineFramerComponent.Responsive exampleFramerVariable="example" />
    </div>
  );
}
```

It's very important to import the styles.css file to include the necessary styles for the components.

To style components you can pass a style or className prop (but remember to use !important to increase the specificity).

Read more on GitHub: https://github.com/remorses/unframer
