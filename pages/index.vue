<template>
  <section class="py-8">
    <div class="flex justify-center gap-3">
      <Badge class="bg-primary-light text-primary"></Badge>
      <Badge class="bg-success-emphasis text-success"></Badge>
      <Badge class="bg-secondary-emphasis text-secondary"></Badge>
    </div>
  </section>

  <section class="bg-light-emphasis py-30">
    <div class="container">
      <div class="flex flex-col items-center">
        <img src="~/assets/images/rabbit-ears.png" alt="rabbit ears" class="mb-2 w-[54px]" />
        <h2 class="mb-8">精選專案</h2>
        <ul class="mb-12 flex flex-col gap-x-3 md:flex-row">
          <li class="md:w-1/3">
            <Card></Card>
          </li>
          <li class="md:w-1/3">
            <Card></Card>
          </li>
          <li class="md:w-1/3">
            <Card></Card>
          </li>
        </ul>
        <Button></Button>
      </div>
    </div>
  </section>

  <div class="flex items-start justify-center gap-4">
    <Button></Button>
    <Button
      class="bg-primary text-white hover:bg-transparent hover:text-primary active:bg-transparent"
    ></Button>
  </div>
  <Counter></Counter>
</template>
