<script setup>
import { useGlobalStateStore } from '@/stores/globalState';
const globalState = useGlobalStateStore();

watch(
  () => globalState.isShowFullscreenLoading,
  () => {
    if (globalState.isShowFullscreenLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
);
</script>
<template>
  <transition name="fade">
    <div
      v-show="globalState.isShowFullscreenLoading"
      class="loading fixed z-50 h-screen w-screen overflow-hidden"
    >
      <div
        v-show="globalState.isShowFullscreenLoading"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
      >
        <div class="rabbit">
          <div class="tail"></div>
          <div class="ears"></div>
        </div>
        <div class="clouds"></div>
        <div
          class="absolute -bottom-4 left-1/2 -translate-x-1/2 transform whitespace-nowrap text-white"
        >
          Loading animation by
          <a
            class="underline underline-offset-2 hover:text-blue-500"
            href="https://codepen.io/katydecorah/pen/nKGxJd"
            >Katy DeCorah</a
          >
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.loading {
  background: #e2b29f;
  font-size: 120%;
}

.rabbit {
  width: 5em;
  height: 3em;
  background: #ffffff;
  border-radius: 70% 90% 60% 50%;
  position: relative;
  box-shadow: -0.2em 1em 0 -0.75em #b78e81;
  transform: rotate(0deg) translate(-2em, 0);
  animation: hop 1s infinite linear;
  z-index: 1;
}

.tail {
  position: absolute;
  width: 1em;
  height: 1em;
  background: white;
  border-radius: 100%;
  top: 0.5em;
  left: -0.3em;
  box-shadow: 4em 0.4em 0 -0.35em #3f3334, 0.5em 1em 0 white, 4em 1em 0 -0.3em white,
    4em 1em 0 -0.3em white, 4em 1em 0 -0.4em white;
  animation: kick 1s infinite linear;
}

.ears {
  position: absolute;
  width: 0.75em;
  height: 2em;
  background: white;
  border-radius: 50% 100% 0 0;
  transform: rotate(-30deg);
  right: 1em;
  top: -1em;
  border-top: 1px solid #f7f5f4;
  border-left: 1px solid #f7f5f4;
  box-shadow: -0.5em 0em 0 -0.1em white;
}
.clouds {
  background: white;
  width: 2em;
  height: 2em;
  border-radius: 100% 100% 0 0;
  position: relative;
  top: -5em;
  opacity: 0;
  transform: translate(0, 0);
  animation: cloudy 1s infinite linear forwards;
  box-shadow: 5em 2em 0 -0.3em white, -2em 2em 0 0 white;
}

.clouds:before,
.clouds:after {
  content: '';
  position: absolute;
  box-shadow: 5em 2em 0 -0.3em white, -2em 2em 0 white;
}

.clouds:before {
  width: 1.25em;
  height: 1.25em;
  border-radius: 100% 100% 0 100%;
  background: white;
  left: -30%;
  bottom: 0;
}

.clouds:after {
  width: 1.5em;
  height: 1.5em;
  border-radius: 100% 100% 100% 0;
  background: white;
  right: -30%;
  bottom: 0;
}
@keyframes hop {
  20% {
    transform: rotate(-10deg) translate(1em, -2em);
    box-shadow: -0.2em 3em 0 -1em #b78e81;
  }
  40% {
    transform: rotate(10deg) translate(3em, -4em);
    box-shadow: -0.2em 3.25em 0 -1.1em #b78e81;
  }
  60%,
  75% {
    transform: rotate(0) translate(4em, 0);
    box-shadow: -0.2em 1em 0 -0.75em #b78e81;
  }
}
@keyframes kick {
  20%,
  50% {
    box-shadow: 4em 0.4em 0 -0.35em #3f3334, 0.5em 1.5em 0 white, 4em 1.75em 0 -0.3em white,
      4em 1.75em 0 -0.3em white, 4em 1.9em 0 -0.4em white;
  }
  40% {
    box-shadow: 4em 0.4em 0 -0.35em #3f3334, 0.5em 2em 0 white, 4em 1.75em 0 -0.3em white,
      4.2em 1.75em 0 -0.2em white, 4.4em 1.9em 0 -0.2em white;
  }
}

@keyframes cloudy {
  40% {
    opacity: 0.75;
    transform: translate(-3em, 0);
  }
  55% {
    opacity: 0;
    transform: translate(-4em, 0);
  }
  90% {
    transform: translate(0, 0);
  }
}
</style>
