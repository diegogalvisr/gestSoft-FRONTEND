<script setup>

// 👉 Images
import chart from '@images/cards/chart-success.png';
import paypal from '@images/cards/paypal-error.png';
import wallet from '@images/cards/wallet-info.png';
</script>

<template>
  <VRow>


    <VCol cols="12" sm="8">
      <VRow>
        <!-- 👉 Profit -->
        <VCol cols="12" md="6">
          <CardStatisticsVertical v-bind="{
            title: 'Profit',
            image: chart,
            stats: '$12,628',
            change: 72.80,
          }" />
        </VCol>
        <!-- 👉 Profit -->
        <VCol cols="12" md="6">
          <CardStatisticsVertical v-bind="{
            title: 'Profit',
            image: chart,
            stats: '$12,628',
            change: 72.80,
          }" />
        </VCol>
        <!-- 👉 Profit -->
        <VCol cols="12" md="6">
          <CardStatisticsVertical v-bind="{
            title: 'Profit',
            image: chart,
            stats: '$12,628',
            change: 72.80,
          }" />
        </VCol>


        <!-- 👉 Sales -->
        <VCol cols="12" md="6">
          <CardStatisticsVertical v-bind="{
            title: 'Sales',
            image: wallet,
            stats: '$4,679',
            change: 28.42,
          }" />
        </VCol>
      </VRow>
    </VCol>


    <VCol cols="12" sm="8" md="6" order="1" order-md="2">
      <VRow>
        <!-- 👉 Payments -->
        <VCol cols="12" sm="8">
          <CardStatisticsVertical v-bind="{
            title: 'Payments',
            image: paypal,
            stats: '$2,468',
            change: -14.82,
          }" />
        </VCol>


      </VRow>

    </VCol>

  </VRow>
</template>
