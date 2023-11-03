# DTES v3.0.0 - v3.1.0

页面地址 [https://www.sysucc-data-science-lab.com/](https://www.sysucc-data-science-lab.com/)

## 1. 改动汇总
#### 1.1 UI 变动(位置+文本)
v3.0.0
1.删掉原来的第3步骤；
2.原来第4步骤删第2和3个item，插入一个新的item；
3.原来第5步第二个item改名，并改其位置，放在第一位的位置；
4.其他非ref/group内 item 被选中都做赋0处理
v3.1.0
改标题文案
第一行：Delayed Treatment Effect Predicting (DTEP) System
第二行：A tool for predicting delayed treatment effects and guiding immuno-oncology trial designs

#### 1.2 逻辑变动


##### 算法概览(和上一版改动的一致)
```bash
# x1 为用户选择后的 15 个数据的集合
# means, scaling, parx, dm 均为常量（较上一版改动的更新）
x=sum((x1-means)*(scaling))
dist0 = parx - x*dm
dist1 = exp(-(dist0 - min(dist0)))
posterior = dist1/sum(dist1)
```

涉及常量值（4个都更新了）
```javascript
export const means = {
  line2: 0.523364486,
  CA2BRCA: 0.046728972,
  CA2EGA: 0.074766355,
  CA2HNSC: 0.074766355,
  CA2NSCLC: 0.252336449,
  CA2RCC: 0.065420561,
  CA2SCLC: 0.102803738,
  CA2SKCM: 0.121495327,
  'trt_comboICI+chemo': 0.271028037,
  'trt_comboICI+ICI': 0.112149533,
  'trt_comboICI+other': 0.130841121,
  trt_combomono_PDL1: 0.130841121,
  Combo_ctrlxchemo: 0.710280374,
  Combo_ctrlxICI: 0.056074766,
  Combo_ctrlxother: 0.130841121,
};

export const scalings = {
  line2: 0.449833965,
  CA2BRCA: -0.160246881,
  CA2EGA: -0.258956343,
  CA2HNSC: 1.576396709,
  CA2NSCLC: -0.390353511,
  CA2RCC: -2.241324825,
  CA2SCLC: 1.920290189,
  CA2SKCM: 1.755220003,
  'trt_comboICI+chemo': -1.530967256,
  'trt_comboICI+ICI': 0.899004858,
  'trt_comboICI+other': -0.274963977,
  trt_combomono_PDL1: 0.64634196,
  Combo_ctrlxchemo: 1.53138489,
  Combo_ctrlxICI: -1.448887197,
  Combo_ctrlxother: 0.507076591,
};

export const parx = [1.4777089028643, 0.683247104169723];
export const dm = [-1.01828496513176, 0.632570963187914];

```
