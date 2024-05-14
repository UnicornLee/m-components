export interface City {
  id: number,
  // 拼音
  spell: string,
  // 名字
  name: string
}

export interface Province {
  id?: string,
  name: string,
  data: string[]
}
