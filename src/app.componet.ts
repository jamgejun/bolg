import { Component, OnInit } from "@angular/core";

interface ItemData {
  id: number;
  title: string;
  mon: string;
  tue: string;
  wen: string;
  thu: string;
  fri: string;
  sat: string;
  sun: string;
}

@Component({
  selector: "nz-demo-table-edit-cell",
  template: `
    <nz-page-header
      class="site-page-header business-setting-title"
      nzTitle="营业设置"
    >
    </nz-page-header>
    <nz-table
      #editRowTable
      nzFrontPagination="false"
      nzBordered
      [nzData]="listOfData"
    >
      <thead>
        <tr class="business-setting-table-header">
          <th></th>
          <th>周一</th>
          <th>周二</th>
          <th>周三</th>
          <th>周四</th>
          <th>周五</th>
          <th>周六</th>
          <th>周日</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of editRowTable.data" class="editable-row">
          <td>
            {{ data.title }}
          </td>
          <td>
            <div
              class="editable-cell"
              [hidden]="editId === data.id && editValue === 'mon'"
              (click)="startEdit(data.id, 'mon')"
            >
              {{ data.mon }}
            </div>
            <input
              [hidden]="editId !== data.id || editValue !== 'mon'"
              type="text"
              nz-input
              [(ngModel)]="data.mon"
              (blur)="stopEdit()"
            />
          </td>
          <td>
            <div
              class="editable-cell"
              [hidden]="editId === data.id && editValue === 'tue'"
              (click)="startEdit(data.id, 'tue')"
            >
              {{ data.tue }}
            </div>
            <input
              [hidden]="editId !== data.id || editValue !== 'tue'"
              type="text"
              nz-input
              [(ngModel)]="data.tue"
              (blur)="stopEdit()"
            />
          </td>
          <td>
            <div
              class="editable-cell"
              [hidden]="editId === data.id && editValue === 'wen'"
              (click)="startEdit(data.id, 'wen')"
            >
              {{ data.wen }}
            </div>
            <input
              [hidden]="editId !== data.id || editValue !== 'wen'"
              type="text"
              nz-input
              [(ngModel)]="data.wen"
              (blur)="stopEdit()"
            />
          </td>
          <td>
            <div
              class="editable-cell"
              [hidden]="editId === data.id && editValue === 'thu'"
              (click)="startEdit(data.id, 'thu')"
            >
              {{ data.thu }}
            </div>
            <input
              [hidden]="editId !== data.id || editValue !== 'thu'"
              type="text"
              nz-input
              [(ngModel)]="data.thu"
              (blur)="stopEdit()"
            />
          </td>
          <td>
            <div
              class="editable-cell"
              [hidden]="editId === data.id && editValue === 'fri'"
              (click)="startEdit(data.id, 'fri')"
            >
              {{ data.fri }}
            </div>
            <input
              [hidden]="editId !== data.id || editValue !== 'fri'"
              type="text"
              nz-input
              [(ngModel)]="data.fri"
              (blur)="stopEdit()"
            />
          </td>
          <td>
            <div
              class="editable-cell"
              [hidden]="editId === data.id && editValue === 'sat'"
              (click)="startEdit(data.id, 'sat')"
            >
              {{ data.sat }}
            </div>
            <input
              [hidden]="editId !== data.id || editValue !== 'sat'"
              type="text"
              nz-input
              [(ngModel)]="data.sat"
              (blur)="stopEdit()"
            />
          </td>
          <td>
            <div
              class="editable-cell"
              [hidden]="editId === data.id && editValue === 'sun'"
              (click)="startEdit(data.id, 'sun')"
            >
              {{ data.sun }}
            </div>
            <input
              class="business-setting-table-input"
              [hidden]="editId !== data.id || editValue !== 'sun'"
              type="text"
              nz-input
              [(ngModel)]="data.sun"
              (blur)="stopEdit()"
            />
          </td>
        </tr>
      </tbody>
    </nz-table>
  `,
  styles: [
    `
      .business-setting-table-header > th {
        width: 12.5%;
        text-align: center;
      }
      .business-setting-title {
        padding: 0;
      }
      .editable-cell {
        position: relative;
        padding: 0;
        cursor: pointer;
      }

      .editable-row:hover .editable-cell {
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding: 4px 11px;
      }
    `
  ]
})
export class NzDemoTableEditCellComponent implements OnInit {
  i = 0;
  titleList = ["工作人数", "工作时间", "基本期望营业额", "高期望营业额"];
  editId: number | null = null;
  editValue: string | null = null;
  listOfData: ItemData[] = [];

  startEdit(id: number, value: string): void {
    this.editId = id;
    this.editValue = value;
  }

  stopEdit(): void {
    this.editId = null;
    this.editValue = null;
    this.getValue();
  }

  getValue() {
    let result = [];
    let keys = Object.keys(this.listOfData[0]);
    keys.shift();
    keys.shift();
    for (let j = 0; j < keys.length; j++) {
      result[j] = {};
      for (let i = 0; i < this.listOfData.length; i++) {
        if (i === 0) {
          result[j].workNumber = this.listOfData[i][keys[j]];
        } else if (i === 1) {
          result[j].workTime = this.listOfData[i][keys[j]];
        } else if (i === 2) {
          result[j].baseBusiness = this.listOfData[i][keys[j]];
        } else {
          result[j].highBusiness = this.listOfData[i][keys[j]];
        }
      }
    }
    console.log(result);
  }

  initData() {
    for (let i = 0; i < 4; i++) {
      this.listOfData.push({
        id: this.i++,
        title: this.titleList[i],
        mon: "",
        tue: "",
        wen: "",
        thu: "",
        fri: "",
        sat: "",
        sun: ""
      });
    }
  }

  ngOnInit(): void {
    this.initData();
  }
}
