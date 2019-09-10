<template>
  <div class="vx-card">
        <div class="vx-card__collapsible-content vs-con-loading__container">
            <div class="vx-card__body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'page-card'
}
</script>
