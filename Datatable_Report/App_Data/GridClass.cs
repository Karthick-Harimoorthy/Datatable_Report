using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

public class GridClass
{
    [JsonProperty("employee_no")]
    public string employee_no;
    [JsonProperty("first_name")]
    public string first_name;


}
public class subject
{

    [JsonProperty("job_order_no")]
    public string job_order_no;
    [JsonProperty("sequence_no")]
    public string sequence_no;
    [JsonProperty("part_no")]
    public string part_no;
    [JsonProperty("value_stream_id")]
    public string value_stream_id;
    [JsonProperty("paint_color")]
    public string paint_color;
    [JsonProperty("dt_hang")]
    public string dt_hang;
    [JsonProperty("dt_takedown")]
    public string dt_takedown;
    [JsonProperty("qty_good")]
    public string qty_good;
    [JsonProperty("qty_rejected")]
    public string qty_rejected;

}
public class GridData
{
    public static GridClass[] PopulateEmployeeData(DataSet ds)
    {
        ArrayList rows = new ArrayList();
        try
        {
            if (ds.Tables["table_results"].Rows.Count > 0)
            {
                foreach (DataRow row in ds.Tables["table_results"].Rows)
                {

                    GridClass obj = new GridClass();
                    obj.employee_no = row["employee_no"].ToString();
                    obj.first_name = row["first_name"].ToString();
       
                    rows.Add(obj);
                }
            }
        }
        catch (Exception ex)
        {
            string err = ex.Message;
        }
        GridClass[] arrReturn = (GridClass[])rows.ToArray(typeof(GridClass));
        return arrReturn;
    }
}
public class subjectData
{
    public static subject[] PopulateEmployeeDetails(DataSet ds)
    {
        ArrayList rows = new ArrayList();
        try
        {
            if (ds.Tables["results"].Rows.Count > 0)
            {
                foreach (DataRow row in ds.Tables["results"].Rows)
                {

                    subject obj = new subject();
                   
                    obj.job_order_no = row["job_order_no"].ToString();
                    obj.sequence_no = row["sequence_no"].ToString();
                    obj.part_no = row["part_no"].ToString();
                    obj.value_stream_id = row["value_stream_id"].ToString();
                    obj.paint_color = row["paint_color"].ToString();
                    obj.dt_hang = row["dt_hang"].ToString();
                    obj.dt_takedown = row["dt_takedown"].ToString();
                    obj.qty_good = row["qty_good"].ToString();
                    obj.qty_rejected = row["qty_rejected"].ToString();

                    rows.Add(obj);
                }
            }
        }
        catch (Exception ex)
        {
            string err = ex.Message;
        }
        subject[] arrReturn = (subject[])rows.ToArray(typeof(subject));
        return arrReturn;
    }
}


