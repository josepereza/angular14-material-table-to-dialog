import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SampleDialogComponent } from '../sample.dialog/sample.dialog.component';
import { ListadoDataSource, ListadoItem } from './listado-datasource';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ListadoItem>;
  dataSource: ListadoDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','weight', 'symbol'];

  constructor(private _dialog: MatDialog ) {
    this.dataSource = new ListadoDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  openDialog(row: any) {
    console.log('Row clicked', row);
    const dialog = this._dialog.open(SampleDialogComponent, {
      width: '250px',
      // Can be closed only by clicking the close button
      disableClose: true,
      data: row
    });
  }
}
