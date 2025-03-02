<template>
  <table class="w-full base-table" dir="ltr">
    <thead>
      <tr class="border-b-[1px]">
        <th class="h-14 bg-Gray-b4 rounded-r-lg">#</th>
        <template v-if="props.rows?.length">
          <th v-for="(cell, index) in props.rows[0].cells" :key="index" class="h-14 bg-Gray-b4"
            :class="(index == 0 ? 'text-start' : 'text-center'), (index == props.rows[0].cells.length - 1 && (props.actions?.length == 0 && 'rounded-l-lg'))"
            v-show="cell.label !== 'id'">
            {{ cell.label }}
          </th>
          <th class="h-14 bg-Gray-b4 rounded-l-lg">عملیات</th>
        </template>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in props.rows" :key="index">
        <td data-label="*">
          <span class="h-5 w-5 text-xs md:block md:mx-auto text-Gray-b3 dark:text-LightGray-b3">{{ index + 1 }}</span>
        </td>
        <td v-for="(cell, index) in row.cells" :key="index" :data-label="cell.label" class="min-w-[200px]"
          :class="index == 0 ? 'text-start' : 'text-center'" v-show="cell.label !== 'id'">
          <div v-if="cell.label == t('status')" class="flex items-center justify-center">
            <Icon v-if="cell.value == 'block'" name="close-circle-red" />
            <Icon v-else-if="cell.value == 'pending'" name="circle-pending" />
            <Icon v-else name="tick-circle-green" />
          </div>
          <div v-else-if="cell.label == t('is_paid')" class="flex items-center justify-center">
            <Icon v-if="cell.value" name="ick-circle-green" />
            <Icon v-else name="close-circle-red" />
          </div>
          <template v-else-if="cell.label == t('final_price')">
            {{ new Intl.NumberFormat('fa-IR').format(
          cell.value,
        ) }}
          </template>
          <template v-else>
            {{ cell.value || '-' }}
          </template>
        </td>
        <td v-if="props.actions?.length !== 0">
          <el-dropdown trigger="click">
            <button class="outline-none">
              <Icon name="more" />
            </button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="(item, i) in props.actions" :key="i" @click="handleClickAction(item, index)">
                  <Icon :name="item.icon" />{{ item.label }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
//props

const props = defineProps({
  rows: {
    default: [
      {
        cells: [
          {
            label: "label",
            value: "value",
          },
        ],
      },
    ],
  },
  actions: [
    {
      label: 'Delete',
      icon: 'trash',

    }
  ]
});

const emits = defineEmits(['trigger'])
const { t } = useI18n()

const handleClickAction = (item, index) => {
  const id = props.rows[index].cells.filter((cell) => cell.label == "id")[0].value
  emits('trigger', {
    id,
    type: item.value
  })
}
</script>
