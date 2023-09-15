# DTES v2.0.0

页面地址 [https://www.sysucc-data-science-lab.com/](https://www.sysucc-data-science-lab.com/)

## 1. 改动汇总
#### 1.1 UI 变动(位置+文本)
1. treatment stage 和 cancer type 位置互换
2. 新的选项 1 和 3 布局修改(从位于同一行改为两行第二行缩进)
3. 5 个选项文案修改
4. 多选的选项内容全部更换, 且都有 Other 这个选项
5. 结果区域从原本两列改成一列
6. 结果区域的结果文案修改, tooltip 文案更新

#### 1.2 逻辑变动
使用如下新算法

##### 算法概览
```bash
# x1 为用户选择后的 17 个数据的集合
# means, scaling, parx, dm 均为常量
x=sum((x1-means)*(scaling))
dist0 = parx - x*dm
dist1 = exp(-(dist0 - min(dist0)))
posterior = dist1/sum(dist1)
```

涉及常量值
```javascript
export const means = {
  line2: 0.52336449,
  CA2BRCA: 0.04672897,
  CA2EGA: 0.07476636,
  CA2HNSC: 0.07476636,
  CA2NSCLC: 0.25233645,
  CA2RCC: 0.06542056,
  CA2SCLC: 0.10280374,
  CA2SKCM: 0.12149533,
  ph2: 0.91588785,
  'trt_comboICI+chemo': 0.27102804,
  'trt_comboICI+ICI_PD1_CTLA4': 0.06542056,
  'trt_comboICI+ICI_PDL1_CTLA4': 0.04672897,
  'trt_comboICI+other': 0.13084112,
  trt_combomono_PDL1: 0.13084112,
  Combo_ctrlxchemo: 0.71028037,
  Combo_ctrlxICI: 0.05607477,
  Combo_ctrlxother: 0.13084112,
};

export const scalings = {
  line2: 0.40877576,
  CA2BRCA: -0.21281123,
  CA2EGA: -0.27786485,
  CA2HNSC: 1.59909552,
  CA2NSCLC: -0.3871628,
  CA2RCC: -2.28170714,
  CA2SCLC: 1.80928865,
  CA2SKCM: 1.76156542,
  ph2: -0.01602277,
  'trt_comboICI+chemo': -1.52013442,
  'trt_comboICI+ICI_PD1_CTLA4': 1.28577542,
  'trt_comboICI+ICI_PDL1_CTLA4': 0.46699858,
  'trt_comboICI+other': -0.20313531,
  trt_combomono_PDL1: 0.61760728,
  Combo_ctrlxchemo: 1.56300638,
  Combo_ctrlxICI: -1.57000944,
  Combo_ctrlxother: 0.4563368,
};

export const parx = [1.4858645, 0.6863944];

export const dm = [-1.0262629, 0.6375269];

```
