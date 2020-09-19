import $axios from "@/common/http"; // 导入封装好的axios!

/**
 * 获取规格列表
 */
export async function getSeck(page = 1, size = 10) {
  let res = await $axios.get("/secklist", {
    params: {
      size,
      page
    }
  });
  if (res.code == 200 && res.list) {
    return res.list;
  } else {
    return [];
  }
}
/**
 * 添加规格
 * @param {*} data  添加的数据
 */
export function addSeck(data) {
  return $axios.post("/secksadd", data);
}
/**
 * 修改规格
 * @param {*} data  修改的数据
 */
export function editSeck(data) {
  return $axios.post("/secksedit", data);
}
/**
 * 删除规格
 * @param {*} uid  删除的id
 */
export function delSeck(id) {
  return $axios.post("/secksdelete", { id });
}
// 获取管理个数
export async function getTotal() {
  let res = await $axios.get("/seckscount");
  return res.list[0].total;
}