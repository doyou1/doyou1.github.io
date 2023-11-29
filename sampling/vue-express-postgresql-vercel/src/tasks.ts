import { onMounted, Ref, ref } from "vue";
import axios, { AxiosResponse } from "axios";
import { Task as RequestTask } from "@/shared/request/task";
import { Task as ResponseTask } from "@/shared/response/task";
import { __VLS_internalComponent } from "./App.vue";

const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
export const tasks: Ref<ResponseTask[]> = ref([]);
export const title = ref();
export const complete = ref(false);
export const send = () => {
const result: RequestTask = {
title: title.value,
complete: complete.value,
};
axios.post("api/tasks", result)
.then((response: AxiosResponse<any, any>) => {
const data = JSON.parse(response.data) as ResponseTask[];
tasks.value = data;
})
.catch((error) => {
console.log(error);
});
};
const fetch = () => {
axios.get("api/tasks")
.then((response: AxiosResponse<any, any>) => {
const data = JSON.parse(response.data) as ResponseTask[];
tasks.value = data;
})
.catch((error) => {
console.log(error);
});
};
onMounted(() => {
fetch();
});
const __VLS_componentsOption = {};
let __VLS_name!: 'App';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
__VLS_intrinsicElements.p; __VLS_intrinsicElements.p;
__VLS_intrinsicElements.ul; __VLS_intrinsicElements.ul;
__VLS_intrinsicElements.li; __VLS_intrinsicElements.li;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.input; __VLS_intrinsicElements.input;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
{
const __VLS_0 = __VLS_intrinsicElements["p"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["ul"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
for (const [task] of __VLS_getVForSourceType((__VLS_ctx.tasks)!)) {
{
const __VLS_10 = __VLS_intrinsicElements["li"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, key: ((task.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, key: ((task.id)), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
(task.id);
(task.title);
(task.complete);
(__VLS_13.slots!).default;
}
// @ts-ignore
[tasks,];
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
{
const __VLS_15 = __VLS_intrinsicElements["div"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["input"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, value: ((__VLS_ctx.title)), type: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, value: ((__VLS_ctx.title)), type: ("text"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
(__VLS_18.slots!).default;
}
{
const __VLS_25 = __VLS_intrinsicElements["div"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = __VLS_intrinsicElements["input"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{}, type: ("checkbox"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, type: ("checkbox"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
(__VLS_ctx.complete);
}
(__VLS_28.slots!).default;
}
{
const __VLS_35 = __VLS_intrinsicElements["div"];
const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
(__VLS_ctx.title);
(__VLS_ctx.complete);
(__VLS_38.slots!).default;
}
{
const __VLS_40 = __VLS_intrinsicElements["button"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
const __VLS_42 = __VLS_41({ ...{ onClick: {} as any, }, type: ("button"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, type: ("button"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
let __VLS_45 = { 'click': __VLS_pickEvent(__VLS_44['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_42>).onClick) };
__VLS_45 = { click: (__VLS_ctx.send) };
(__VLS_43.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[title, title, complete, title, complete, send,];
return __VLS_slots;
}
