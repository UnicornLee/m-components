<template>
  <div style="width: 200px; display: flex; justify-content: space-between;">
    <m-menu
      :data="data1"
      default-active="2"
      active-text-color="red"
      name="a"
      index="b"
      icon="c"
      children="d"
    ></m-menu>
    <m-infinite-menu
      :data="data2"
      default-active="3-1-1-1-1"
      active-text-color="red"
      name="a"
      index="b"
      icon="c"
      children="d"
    ></m-infinite-menu>
  </div>
</template>

<script setup lang="ts">
/*let data1 = [
  {
    name: '导航1',
    index: '1',
    icon: 'document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'document'
      }
    ]
  }
]*/
let data1 = [
  {
    a: '导航1',
    b: '1',
    c: 'document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'document'
      }
    ]
  }
]
/*let data2 = [
  {
    name: '导航1',
    index: '1',
    icon: 'Document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'Document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'Document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'Document',
        children: [
          {
            name: '导航3-1-1',
            index: '3-1-1',
            icon: 'Document',
            children: [
              {
                name: '导航3-1-1-1',
                index: '3-1-1-1',
                icon: 'Document',
                children: [
                  {
                    name: '导航3-1-1-1-1',
                    index: '3-1-1-1-1',
                    icon: 'Document'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]*/
let data2 = [
  {
    a: '导航1',
    b: '1',
    c: 'document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'document',
        d: [
          {
            a: '导航3-1-1',
            b: '3-1-1',
            c: 'document',
            d: [
              {
                a: '导航3-1-1-1',
                b: '3-1-1-1',
                c: 'document',
                d: [
                  {
                    a: '导航3-1-1-1-1',
                    b: '3-1-1-1-1',
                    c: 'document'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
</script>

<style scoped lang="scss">

</style>
