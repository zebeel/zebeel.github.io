<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import IconDeveloper from './icons/IconDeveloper.vue'
import IconMobile from './icons/IconMobile.vue'
import IconCloud from './icons/IconCloud.vue'
import IconDatabase from './icons/IconDatabase.vue'
import IconGit from './icons/IconGit.vue'
import IconTest from './icons/IconTest.vue'
import IconLanguage from './icons/IconLanguage.vue'
import IconCommunity from './icons/IconCommunity.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <IconDeveloper />
    </template>
    <template #heading>Full Stack Web Development (7+ years)</template>
    <ul>
      <li>JavaScript, TypeScript, Node.js, Express</li>
      <li>Vue.js, React, Angular</li>
      <li>PHP, Laravel | Java, Spring | Python, Django</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconMobile />
    </template>
    <template #heading>Mobile Development (2+ years)</template>
    <ul>
      <li>React Native</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconCloud />
    </template>
    <template #heading>Cloud Platform (3+ years)</template>
    <ul>
      <li>Google Cloud Platform (GCP)</li>
      <li>Deployment and management of cloud applications</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconCommunity />
    </template>
    <template #heading>Communication Services (3+ years)</template>
    <ul>
      <li>Twilio</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconDatabase />
    </template>
    <template #heading>Database</template>
    <ul>
      <li>MySQL, PostgreSQL, Oracle, Spanner</li>
      <li>MongoDB, Firestore</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconGit />
    </template>
    <template #heading>Version Control and CI/CD</template>
    <ul>
      <li>Proficient in Git & CI/CD</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconTest />
    </template>
    <template #heading>Development and Testing</template>
    <ul>
      <li>Development, testing, and debugging expertise</li>
      <li>Synchronization of skills to ensure application quality and performance</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconLanguage />
    </template>
    <template #heading>Languages</template>
    <ul>
      <li>Fluent in English, Japanese, Vietnamese</li>
      <li>Basic proficiency in Chinese</li>
    </ul>
  </WelcomeItem>
</template>
