export class FilterUtil {

    applyFilter(filterValue: string, dataSource: any) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLocaleLowerCase();
        dataSource.filter = filterValue;
    }

}