<template>
  <section class="py-8">
    <div class="flex justify-center gap-3">
      <Badge type="校園" />
      <Badge type="公益" />
      <Badge type="市集" />
    </div>
  </section>

  <section class="bg-light-emphasis py-30">
    <div class="container">
      <div class="flex flex-col items-center">
        <img src="~/assets/images/rabbit-ears.png" alt="rabbit ears" class="mb-2 w-[54px]" />
        <h2 class="mb-8">精選專案</h2>
        <ul class="mb-12 flex flex-col gap-x-3 md:flex-row">
          <li class="md:w-1/3">
            <Card
              type="市集"
              timeLeft="剩餘時間：2 天 3 小時 5分"
              title="小蝸牛夏日市集"
              proposer="小蝸牛公司"
              :minAmount="0"
              :maxAmount="3000000"
              :currentAmount="2014000"
            ></Card>
          </li>
          <li class="md:w-1/3">
            <Card
              type="公益"
              timeLeft="剩餘時間：2 天 3 小時 5分"
              title="《看見動物的真實處境》深度報導 x 為牠發聲"
              proposer="窩窩wouwou"
              :minAmount="0"
              :maxAmount="1171000"
              :currentAmount="971000"
            ></Card>
          </li>
          <li class="md:w-1/3">
            <Card
              type="校園"
              timeLeft="剩餘時間：2 天 3 小時 5分"
              title="初生小雞 教會孩子的生命功課｜沉浸式校園巡迴公益募資計畫"
              proposer="渴慕文創"
              :minAmount="0"
              :maxAmount="1600000"
              :currentAmount="1284500"
            ></Card>
          </li>
        </ul>
        <button class="btn btn-primary-outline">查看更多</button>
      </div>
    </div>
  </section>

  <div>
    <Counter></Counter>
  </div>
</template>
