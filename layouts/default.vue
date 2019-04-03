<template>
  <div :class="{ 'darkTheme': this.$store.state.isDark }" class="layout-wrapper">
    <contact-bar class="contact-bar-side"/>
    <theme-selector/>
    <nuxt-link to="/" class="index-link">
      <h1 class="layout-title">
        <span>C</span>HRISTOPHER <span>K</span>ADE
      </h1>
    </nuxt-link>
    <nuxt/>
    <contact-bar class="contact-bar-bottom"/>
  </div>
</template>

<script>
import ContactBar from '@/components/ContactBar'
import ThemeSelector from '@/components/ThemeSelector'

export default {
  components: {
    ContactBar,
    ThemeSelector
  }
}
</script>


<style lang="scss">
.layout-wrapper {
  padding: 12px;
  background-color: $background-light;
  transition: background-color 100ms ease-in-out, color 100ms ease;
}

.index-link {
  text-align: center;
  text-decoration: none;
  color: $text-light;
  background-color: transparent;
}

.layout-title {
  font-weight: $default-font-weight;
}

.layout-title > span {
  color: $highlight-light;
}

.contact-bar-bottom {
  display: none;
}

/* Smartphones (portrait) ----------- */

@media only screen and (max-width: 720px) {
  .index-link {
    font-size: 0.9rem;
  }

  .index-link > h1 {
    margin-top: 50px;
  }

  .layout-wrapper > .contact-bar-bottom {
    display: block;
  }

  .layout-wrapper > .contact-bar-side {
    display: none;
  }
}
</style>
