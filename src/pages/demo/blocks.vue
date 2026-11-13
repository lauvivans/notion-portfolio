<script setup lang="ts">
import {
  Code,
  Text,
  Heading,
  TextHighlight,
  Callout,
  BulletList,
  BulletItem,
  ToDoList,
  ToggleList,
  Columns,
  Column,
  Divider,
  Link,
  LinkMention,
  Bookmark,
  Image,
  Loader,
} from "@core/index.ts";
import { Icons } from "@core/enum";
import metadata from "@/metadata";

// vue-tsc 3.3 misreads a URL passed to a component in the template and
// breaks the type check of every expression after it, so URLs live here.
const vueUrl = "https://vuejs.org/";
const repoUrl = "https://github.com/lauvivans/kami";

const code = {
  text: `<Text>A paragraph with <TextHighlight>highlighted</TextHighlight> words.</Text>`,
  heading: `<Heading :level="4">Heading level 4</Heading>`,
  callout: `<Callout emoji="💡">A callout with an emoji.</Callout>`,
  code: `<Text>Run <Code inline>npm run dev</Code> to start.</Text>

<!-- Pass multi-line code through {{ }} to keep its line breaks -->
<Code lang="js">{{ sample }}</Code>`,
  bullets: `<BulletList :items="['First item', 'Second item']" />

<BulletList>
  <BulletItem>Or write the items <TextHighlight>by hand</TextHighlight></BulletItem>
</BulletList>`,
  todo: `<ToDoList
  :items="[
    { name: 'Done', isChecked: true },
    { name: 'Not yet', isChecked: false },
  ]"
/>`,
  toggle: `<ToggleList :iconToOpen="Icons.arrowRightFilled" :iconToClose="Icons.arrowDownFilled">
  <template #summaryContent>Click the arrow</template>
  <template #detailsContent><Text>Hidden content.</Text></template>
</ToggleList>`,
  columns: `<Columns :numberOfColumns="2" :col1Size="30" :col2Size="60">
  <Column><Text>30%</Text></Column>
  <Column><Text>60%</Text></Column>
</Columns>`,
  links: `<Text>An inline <Link href="https://vuejs.org/">link</Link>.</Text>
<LinkMention :page="metadata.pages['coffee-shop']" emoji="☕" />
<LinkMention href="https://github.com/lauvivans/kami" emoji="🐙" />
<Bookmark title="Kami" subtitle="Source code" link="https://github.com/lauvivans/kami" />`,
  image: `<Image src="/banners/page-example.webp" />`,
  others: `<Divider />
<Empty />
<Loader />`,
};

const sample = `const greeting = "Hello";
console.log(greeting);`;
</script>

<template>
  <Callout emoji="🧱"
    >Every block below is imported from the package, like
    <Code inline>import { Text } from "@lauvivans/kami"</Code>.</Callout
  >

  <Heading :level="3">Text</Heading>
  <Text>A paragraph with <TextHighlight>highlighted</TextHighlight> words.</Text>
  <Code lang="vue">{{ code.text }}</Code>

  <Heading :level="3">Heading</Heading>
  <Heading :level="4">Heading level 4</Heading>
  <Text>Levels 1 to 4.</Text>
  <Code lang="vue">{{ code.heading }}</Code>

  <Heading :level="3">Callout</Heading>
  <Callout emoji="💡">A callout with an emoji.</Callout>
  <Code lang="vue">{{ code.callout }}</Code>

  <Heading :level="3">Code</Heading>
  <Text>Run <Code inline>npm run dev</Code> to start.</Text>
  <Code lang="js">{{ sample }}</Code>
  <Code lang="vue">{{ code.code }}</Code>

  <Heading :level="3">Bulleted list</Heading>
  <BulletList :items="['First item', 'Second item']" />
  <BulletList>
    <BulletItem>Or write the items <TextHighlight>by hand</TextHighlight></BulletItem>
  </BulletList>
  <Code lang="vue">{{ code.bullets }}</Code>

  <Heading :level="3">To-do list</Heading>
  <ToDoList
    :items="[
      { name: 'Done', isChecked: true },
      { name: 'Not yet', isChecked: false },
    ]"
  />
  <Code lang="vue">{{ code.todo }}</Code>

  <Heading :level="3">Toggle list</Heading>
  <ToggleList :iconToOpen="Icons.arrowRightFilled" :iconToClose="Icons.arrowDownFilled">
    <template #summaryContent>Click the arrow</template>
    <template #detailsContent><Text>Hidden content.</Text></template>
  </ToggleList>
  <Code lang="vue">{{ code.toggle }}</Code>
  <Callout emoji="⚠️"
    >The icons come from the <Code inline>Icons</Code> enum, which the package
    doesn't export yet.</Callout
  >

  <Heading :level="3">Columns</Heading>
  <Columns :numberOfColumns="2" :col1Size="30" :col2Size="60">
    <Column><Callout>30%</Callout></Column>
    <Column><Callout>60%</Callout></Column>
  </Columns>
  <Text
    >From 2 to 5 columns. Sizes are optional: 10, 20, 30, 40, 60, 80 or 90
    percent.</Text
  >
  <Code lang="vue">{{ code.columns }}</Code>

  <Heading :level="3">Links</Heading>
  <Text>An inline <Link :href="vueUrl">link</Link>.</Text>
  <LinkMention :page="metadata.pages['coffee-shop']" emoji="☕" />
  <LinkMention :href="repoUrl" emoji="🐙" />
  <Bookmark title="Kami" subtitle="Source code" :link="repoUrl" />
  <Code lang="vue">{{ code.links }}</Code>

  <Heading :level="3">Image</Heading>
  <Image src="/banners/page-example.webp" />
  <Code lang="vue">{{ code.image }}</Code>

  <Heading :level="3">Divider, empty space and loader</Heading>
  <Divider />
  <Loader />
  <Code lang="vue">{{ code.others }}</Code>

  <Heading :level="3">Database</Heading>
  <Text
    >A gallery of pages. Clicking a card opens the page in a modal. See it on
    the demo's home page.</Text
  >
  <LinkMention :page="metadata.pages['demo']" emoji="✨" />
</template>
