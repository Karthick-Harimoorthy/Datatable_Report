<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="datatable_results.aspx.cs" Inherits="datatable_results" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Datatable Report: Employee Data</title>

    <script src="assets/plugins/work-report/jquery.js"></script>
    <script src="assets/plugins/work-report/datatable.js"></script>
    <script src="assets/plugins/data-tables/jquery.datatables.min.js"></script>
    <script src="assets/plugins/work-report/searchpane.js"></script>
    <script src="assets/plugins/work-report/select.js"></script>
    <link href="https://cdn.datatables.net/searchpanes/1.1.1/css/searchPanes.dataTables.min.css" rel="stylesheet">
    <link href="assets/plugins/data-tables/jquery.datatables.min.css" rel="stylesheet" />

    <link href="assets/plugins/work-report/jquery-datatable.css" rel="stylesheet" />

    <style>
        .dataTables_scrollBody {
            cursor: pointer;
        }

        table.dataTable tbody >
        tr.selected {
            background-color: #008455;
        }

        .text-left {
            text-align: left !important;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div class="row ml-3 mr-3 mb-5" style="padding-top: 40px;">
            <div class="col-sm-3" style="padding-left: 40px;">
                <div class="card card-default" data-scroll-height="700px" style="width:270px">
                    <div class="card-body">
                        <div class="tab-content" id="myTabContent4">
                            <div class="tab-pane pt-3 fade show active" id="groups" role="tabpanel"
                                aria-labelledby="groups-tab">
                                <div class="basic-data-table">
                                    <table id="Employee-data-table" class="table compact hover nowrap stripe" style="width: 100%">
                                        <thead>
                                            <tr>
                                                <th>employee_no</th>
                                                <th>Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-9">
                <div>
                    <table id="Employee-details" class="table compact hover nowrap stripe" style="width: 100%">
                        <thead>
                            <tr>
                                <th>Job Order No</th>
                                <th>Sequence No</th>
                                <th>Part No</th>
                                <th>Value Stream Id</th>
                                <th>Paint Color</th>
                                <th>Date/Time Hang</th>
                                <th>Date/Time Takedown</th>
                                <th>Qty Good</th>
                                <th>Qty Rejected</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row ml-3 mr-3 mb-5" style="padding-top: 40px;">
            <div class="col-sm-6" style="padding-left: 40px;">
                <div class="basic-data-table">
                    <table id="data-table" class="table compact hover nowrap stripe" style="width: 100%">
                        <thead>
                            <tr>
                                <th>supervisor</th>
                                <th>Supervisor Id</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </form>
    <script>
        $(document).ready(function () {
            PopulateSupervisor();
            StudentsDatatable();

        });
        function StudentsDatatable() {

            if (!$.fn.DataTable.isDataTable('#Employee-data-table')) {

                var students_url = "datatable_results_get_data.aspx?type=get_employee_data";

                var students_table = jQuery('#Employee-data-table').DataTable({
                    dom: 'B<"row justify-content-between top-information right-aligned"f>rt<"row justify-content-between bottom-information"ip><"clear">',
                    fixedHeader: true,
                    "paging": false,
                    "scrollX": true,
                    "scrollY": "430px",
                    "ajax": {
                        "url": students_url,
                        "dataSrc": 'data'
                    },
                    "columns": [
                        { "data": "employee_no", "searchable": false, "visible": false, },
                        { "data": "first_name", "searchable": true, className: "text-left" }
                    ],
                    columnDefs: [
                        {
                            targets: '_all', searchPanes: {
                                show: true,
                            },
                        }
                    ]
                });

            }
        }
        $(document).ready(function () {
            var table = $('#Employee-data-table').DataTable();

            $('#Employee-data-table tbody').on('click', 'tr', function () {
                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                else {
                    table.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                }
            });

        });

        $(document).ready(function () {
            var table = $('#Employee-data-table').DataTable();

            $('#Employee-data-table tbody').on('click', 'tr', function () {
                var data = table.rows(this).data();
                var employee_no = data[0].employee_no;
                Name_click(employee_no);
            });
        });

        function Name_click(employee_no) {
            $('#Employee-details').dataTable().fnDestroy();
            if (!$.fn.DataTable.isDataTable('#Employee-details')) {

                var url = "datatable_results_get_data.aspx?type=get_employee_details&employee_no=" + employee_no;

                var table = jQuery('#Employee-details').DataTable({
                    dom: 'B<"row justify-content-between top-information right-aligned"f>rt<"row justify-content-between bottom-information"ip><"clear">',
                    fixedHeader: true,

                    "ajax": {
                        "url": url,
                        "dataSrc": 'data'
                    },
                    "columns": [
                        { "data": "job_order_no", "searchable": true },
                        { "data": "sequence_no", "searchable": true },
                        { "data": "part_no", "searchable": true },
                        { "data": "value_stream_id", "searchable": true },
                        { "data": "paint_color", "searchable": true },
                        { "data": "dt_hang", "searchable": true },
                        { "data": "dt_takedown", "searchable": true },
                        { "data": "qty_good", "searchable": true },
                        { "data": "qty_rejected", "searchable": true }
                    ]

                });
            }
            else {
                var url = "datatable_results_get_data.aspx?type=get_employee_details&employee_no=" + employee_no;
                ReloadGrid(url);

            }
        }

        function ReloadGrid(url) {
            var table = $('#Employee-details').DataTable();
            table.ajax.url(url);
            table.ajax.reload();
        }

        function PopulateSupervisor() {
            if (!$.fn.DataTable.isDataTable('#data-table')) {
                var url = "datatable_results_get_data.aspx?type=get_data";

                var table = $('#data-table').DataTable({
                    "dom": 'P<"row justify-content-between top-information right-aligned"f>rt<"row justify-content-between bottom-information"ip><"clear">',
                    "paging": false,
                    "scrollX": true,
                    "scrollY": "430px",
                    "ajax": {
                        "url": url,
                        "dataSrc": 'data'
                    },
                    "columns": [
                        { "data": "username", "searchable": true },
                        { "data": "supervisor", "searchable": false }

                    ],
                    columnDefs: [
                        {
                            targets: '_all', searchPanes: {
                                show: true,
                            },
                        }
                    ]

                });
            }
        }

    </script>
</body>
</html>
