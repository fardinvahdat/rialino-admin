export const contactInfoFormModels = ref({
  name: "",
  fullname: "",
  allonym: "",
  email: "",
  mobile: "",
  telephone: "",
  fax: "",
  company: "",
  postal_code: "",
  state_id: null,
  city_id: null,
  birth_day: "",
  occasion_date: "",
  address: "",
  description: "",
  user_id: null,
});

export const createGroupFormModels = ref({
  name: "",
  description: "",
});
export const editGroupFormModels = ref({
  name: "",
  description: "",
});

export const clearGroupFormModels = () => {
  createGroupFormModels.value = {
    name: "",
    description: "",
  };
};

export const createDriverFormModels = ref({
  name: "",
  title: "",
  description: "",
  base: "0",
  coefficient: null,
  status: "1",
});

export const clearDriverFormModels = () => {
  createDriverFormModels.value = {
    name: "",
    title: "",
    description: "",
    base: "0",
    coefficient: "",
    status: "1",
  };
};

export const createInstanceFormModels = ref({
  type: "",
  title: "",
  status: 1,
});

export const clearInstanceFormModels = () => {
  createInstanceFormModels.value = {
    type: "",
    title: "",
    status: 1,
  };
};

export const sendSmsFormModels = ref({
  number_id: "",
  message: "",
  receivers: [],
  file: "",
  sender_id: null,
  numbers: "",
  is_repeat_submission: 0,
});

export const clearSendSmsForm = () => {
  sendSmsFormModels.value = {
    number_id: "",
    message: "",
    receivers: [],
    file: "",
    sender_id: null,
    numbers: "",
    is_repeat_submission: 0,
  };
};

export const senCorrespondenceFormModels = ref({
  number_id: "",
  message: "",
  receivers: [],
  file: [],
  sender_id: null,
  duplicateSend: 0,
});
export const clearSenCorrespondenceFormModels = () => {
  senCorrespondenceFormModels.value = {
    number_id: "",
    message: "",
    receivers: [],
    file: [],
    sender_id: null,
    duplicateSend: 0,
  };
};

export const senCorrespondenceTimerFormModels = ref({
  number_id: "",
  title: "",
  period: "once",
  dayOfWeek: "",
  dayOfMonth: 1,
  monthOfYear: "",
  time_send: "",
  date_send: "",
  repeat: 1,
  file: [],
  isFlash: 0,
  is_repeat_submission: 0,
});
export const clearsenCorrespondenceTimerFormModels = () => {
  senCorrespondenceTimerFormModels.value = {
    number_id: "",
    title: "",
    period: "once",
    dayOfWeek: "",
    dayOfMonth: 1,
    monthOfYear: "",
    time_send: "",
    date_send: "",
    repeat: 1,
    file: [],
    isFlash: 0,
    is_repeat_submission: 0,
  };
};
export const createLinesFormModel = ref({
  type: "public",
  driver_instance_id: null,
  number: "",
  purchase_cost: null,
  sell_cost: null,
  status: 1,
});

export const clearLinesFormModels = () => {
  createLinesFormModel.value = {
    type: "public",
    driver_instance_id: null,
    number: "",
    purchase_cost: null,
    sell_cost: null,
    status: 1,
  };
};

export const createPackageFormModels = ref({
  type: "full_package",
  role_name: "seniorRepresentative_sms",
  title: "",
  total_price: null,
  number_of_agents: null,
  number_of_users: null,
  send_unit_price: null,
  send_credit: null,
  receive_unit_price: null,
  receive_credit: null,
  is_received_tariff: 0,
  dedicated_line_unit_price: null,
  dedicated_line: null,
  public_line_unit_price: null,
  public_line: null,
  price: null,
  status: true,
  category: "gold",
  prices: [{ month: null, price: null, is_discount: false }],
});
export const chargePackageFormModels = ref({
  type: "charge",
  total_price: null,
  send_unit_price: null,
  send_credit: null,
});

export const clearPackageFormModels = () => {
  createPackageFormModels.value = {
    type: "full_package",
    role_name: "seniorRepresentative_sms",
    title: "",
    total_price: null,
    number_of_agents: null,
    number_of_users: null,
    send_unit_price: null,
    send_credit: null,
    receive_unit_price: null,
    receive_credit: null,
    dedicated_line_unit_price: null,
    dedicated_line: null,
    public_line_unit_price: null,
    public_line: null,
    price: null,
    status: true,
    is_received_tariff: 0,
    category: "gold",
    prices: [{ month: 0, price: 0, is_discount: false }],
  };
};
export const clearChargePackageFormModels = () => {
  chargePackageFormModels.value = {
    type: "charge",
    total_price: null,
    send_unit_price: null,
    send_credit: null,
  };
};

export const addFundsFormModels = ref({
  wallet_id: null,
  amount: null,
  user_id: null,
  meta: null,
});


export const clearPackageFormModelsCharge = () => {
  chargePackageFormModels.value = {
    type: "charge",
    total_price: null,
    send_unit_price: null,
    send_credit: null,
  };
};