import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "nz-demo-form-advanced-search",
  template: `
    <div>
      <table border="1">
        <th>会员信息</th>
        <tr>
          <td>会员卡号</td>
          <td><input class="input-with-no-border" /></td>
          <td>手机号</td>
          <td><input class="input-with-no-border" /></td>
        </tr>
        <tr>
          <td>姓</td>
          <td><input class="input-with-no-border" /></td>
          <td>名字</td>
          <td><input class="input-with-no-border" /></td>
        </tr>
        <tr>
          <td>性别</td>
          <td><input class="input-with-no-border" /></td>
          <td>上次消费日期</td>
          <td><input class="input-with-no-border" /></td>
        </tr>
        <tr>
          <td>上次消费金额</td>
          <td><input class="input-with-no-border" /></td>
          <td>预约时间</td>
          <td><input class="input-with-no-border" /></td>
        </tr>
        <tr>
          <td>备注</td>
          <td><input class="input-with-no-border" /></td>
          <td></td>
          <td><input class="input-with-no-border" /></td>
        </tr>
      </table>

      <table border="1">
        <th>治疗信息</th>
        <tr>
          <td>治疗师</td>
          <td><input class="input-with-no-border" /></td>
          <td>健康基金</td>
          <td><input class="input-with-no-border" /></td>
        </tr>
        <tr>
          <td>开始时间</td>
          <td><input class="input-with-no-border" /></td>
          <td>现金</td>
          <td><input class="input-with-no-border" /></td>
        </tr>
        <tr>
          <td>治疗项目</td>
          <td><input class="input-with-no-border" /></td>
          <td>刷卡</td>
          <td><input class="input-with-no-border" /></td>
        </tr>
        <tr>
          <td>治疗部位</td>
          <td><input class="input-with-no-border" /></td>
          <td>礼卷id</td>
          <td><input class="input-with-no-border" /></td>
        </tr>
        <tr>
          <td>加钟时间</td>
          <td><input class="input-with-no-border" /></td>
          <td>礼卷余额</td>
          <td><input class="input-with-no-border" /></td>
        </tr>
        <tr>
          <td>治疗时长</td>
          <td><input class="input-with-no-border" /></td>
          <td>礼卷支付金额</td>
          <td><input class="input-with-no-border" /></td>
        </tr>
        <tr>
          <td>折扣名称</td>
          <td><input class="input-with-no-border" /></td>
          <td>信用附加费</td>
          <td><input class="input-with-no-border" /></td>
        </tr>
        <tr>
          <td>治疗细节</td>
          <td><input class="input-with-no-border" /></td>
          <td>实付金额</td>
          <td><input class="input-with-no-border" /></td>
        </tr>
        <tr>
          <td>客户评分</td>
          <td><input class="input-with-no-border" /></td>
          <td></td>
          <td><input class="input-with-no-border" /></td>
        </tr>
      </table>

      <table border="1">
        <th>结算信息</th>
        <tr>
          <th>总计</th>
          <th>折扣金额</th>
          <th>支付金额</th>
        </tr>
        <tr>
          <td><input class="input-with-no-border" /></td>
          <td><input class="input-with-no-border" /></td>
          <td><input class="input-with-no-border" /></td>
        </tr>
      </table>

      <form nz-form [formGroup]="validateForm" class="ant-advanced-search-form">
        <div nz-row [nzGutter]="24">
          <div nz-col [nzSpan]="12" *ngFor="let control of userControlArray">
            <nz-form-item>
              <nz-form-label
                [nzSm]="8"
                [nzXs]="24"
                nzRequired
                [nzFor]="control.label"
                >{{ control.label }}</nz-form-label
              >
              <nz-form-control>
                <input
                  nz-input
                  placeholder="请输入{{ control.label }}"
                  [formControlName]="control.value"
                  [attr.id]="control.index"
                />
              </nz-form-control>
            </nz-form-item>
          </div>
        </div>
      </form>

      <form nz-form [formGroup]="validateForm" class="ant-advanced-search-form">
        <div nz-row [nzGutter]="24">
          <div
            nz-col
            [nzSpan]="12"
            *ngFor="let control of treatmentInfoControlArray"
          >
            <nz-form-item>
              <nz-form-label
                [nzSm]="8"
                [nzXs]="24"
                nzRequired
                [nzFor]="control.label"
                >{{ control.label }}</nz-form-label
              >
              <nz-form-control>
                <input
                  nz-input
                  placeholder="请输入{{ control.label }}"
                  [formControlName]="control.value"
                  [attr.id]="control.index"
                />
              </nz-form-control>
            </nz-form-item>
          </div>
        </div>
      </form>

      <form nz-form [formGroup]="validateForm" class="ant-advanced-search-form">
        <div nz-row [nzGutter]="24">
          <div
            nz-col
            [nzSpan]="8"
            *ngFor="let control of settlementInfoControlArray"
          >
            <nz-form-item>
              <nz-form-label
                [nzSm]="8"
                [nzXs]="24"
                nzRequired
                [nzFor]="control.label"
                >{{ control.label }}</nz-form-label
              >
              <nz-form-control>
                <input
                  nz-input
                  placeholder="请输入{{ control.label }}"
                  [formControlName]="control.value"
                  [attr.id]="control.index"
                />
              </nz-form-control>
            </nz-form-item>
          </div>
        </div>
        <div nz-row>
          <div nz-col [nzSpan]="24" class="search-area">
            <button nz-button nzDanger [nzType]="'primary'">撤销支付</button>
            <button nz-button (click)="resetForm()">保存</button>
            <button nz-button (click)="resetForm()">提交</button>
          </div>
        </div>
      </form>
    </div>
  `,

  styles: [
    `
      .ant-advanced-search-form {
        padding: 24px;
        background: #fbfbfb;
        border: 1px solid #d9d9d9;
        border-radius: 6px;
      }

      .search-result-list {
        margin-top: 16px;
        border: 1px dashed #e9e9e9;
        border-radius: 6px;
        background-color: #fafafa;
        min-height: 200px;
        text-align: center;
        padding-top: 80px;
      }

      [nz-form-label] {
        overflow: visible;
      }
      .input-with-no-border {
        border: none;
      }

      button {
        margin-left: 8px;
      }

      .collapse {
        margin-left: 8px;
        font-size: 12px;
      }

      .search-area {
        text-align: right;
      }
    `
  ]
})
export class NzDemoFormAdvancedSearchComponent implements OnInit {
  validateForm!: FormGroup;
  userControlArray: Array<{ label: string; value: string }> = [];
  treatmentInfoControlArray: Array<{ label: string; value: string }> = [];
  settlementInfoControlArray: Array<{ label: string; value: string }> = [];
  userInfo = [
    {
      label: "会员卡号",
      value: "idCard"
    },
    {
      label: "手机号",
      value: "phoneNumber"
    },
    {
      label: "姓",
      value: "firstName"
    },
    {
      label: "名字",
      value: "lastName"
    },
    {
      label: "性别",
      value: "gender"
    },
    {
      label: "上次消费日期",
      value: "lastCustomDay"
    },
    {
      label: "上次消费金额",
      value: "lastCustomMoney"
    },
    {
      label: "预约时间",
      value: "reservationTime"
    },
    {
      label: "备注",
      value: "remarks"
    }
  ];
  treatmentInfo = [
    {
      label: "治疗师",
      value: "treatmenter"
    },
    {
      label: "健康基金",
      value: "healthFund"
    },
    {
      label: "开始时间",
      value: "startTime"
    },
    {
      label: "现金",
      value: "crash"
    },
    {
      label: "治疗项目",
      value: "treatmentProject"
    },
    {
      label: "刷卡",
      value: "useCard"
    },
    {
      label: "治疗部位",
      value: "treatmentLocation"
    },
    {
      label: "礼卷id",
      value: "voucherId"
    },
    {
      label: "加钟时间",
      value: "additionTime"
    },
    {
      label: "礼卷余额",
      value: "voucherBalance"
    },
    {
      label: "治疗时长",
      value: "treatmentTime"
    },
    {
      label: "礼卷支付金额",
      value: "voucherPay"
    },
    {
      label: "折扣名称",
      value: "discountName"
    },
    {
      label: "信用附加费",
      value: "creditSurcharge"
    },
    {
      label: "治疗细节",
      value: "treatmentDetail"
    },
    {
      label: "实付金额",
      value: "actualAmount"
    },
    {
      label: "客户评分",
      value: "userRating"
    }
  ];
  settlementInfo = [
    {
      label: "总计",
      value: "totalCost"
    },
    {
      label: "折扣金额",
      value: "discountAmount"
    },
    {
      label: "支付金额",
      value: "payAmount"
    }
  ];

  resetForm(): void {
    this.validateForm.reset();
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
    this.userInfo.forEach((element) => {
      this.userControlArray.push(element);
      this.validateForm.addControl(element.value, new FormControl());
    });
    this.treatmentInfo.forEach((element) => {
      this.treatmentInfoControlArray.push(element);
      this.validateForm.addControl(element.value, new FormControl());
    });
    this.settlementInfo.forEach((element) => {
      this.settlementInfoControlArray.push(element);
      this.validateForm.addControl(element.value, new FormControl());
    });
  }
}
