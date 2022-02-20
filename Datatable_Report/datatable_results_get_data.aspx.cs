using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;


public partial class datatable_results_get_data : System.Web.UI.Page
{
    string gType = "";
    string gEmpNo = "";
    DataSet supvsrDS = new DataSet();
    public class Supervisor_list
    {
        public string supervisor { get; set; }
        public string username { get; set; }
    }

    protected void Page_Load(object sender, EventArgs e)
    {
        if (Request["type"] != null)
        {
            if (Request["type"].ToString() != "")
            {
                this.gType = Request["type"].ToString();
            }
        }

        if (this.gType == "get_employee_data")
        {
            GetEmployeeData();
        }
        else if (this.gType == "get_data")
        {

            Populate_supervisor();
        }
        else if (this.gType == "get_employee_details")
        {
            this.gEmpNo = Request["employee_no"].ToString();
            GetEmployeeDetails(gEmpNo);
        }
        

    }

    public void GetEmployeeData()
    {
        try
        {
            string connectionString = "";
            MySqlConnection con = new MySqlConnection(connectionString);
            con.Open();
            string query = "SELECT employee_no,first_name FROM employees_hidden";
            MySqlDataAdapter da = new MySqlDataAdapter(query, con);
            DataSet ds = new DataSet();
            ds.Clear();
            da.Fill(ds, "table_results");
            con.Close();
            PopulateEmployeeData(ds);
        }
        catch (Exception ex)
        {

        }

    }
    private void PopulateEmployeeData(DataSet ds)
    {
        GridClass[] arrReturn = GridData.PopulateEmployeeData(ds);
        int arry_size = arrReturn.Length;
        for (int i = 0; i < arry_size; i++)
        {
            arrReturn[i].employee_no = arrReturn[i].employee_no.ToString();
            arrReturn[i].first_name = arrReturn[i].first_name.ToString();
   
        }
        string data = JsonConvert.SerializeObject(arrReturn);

        Response.Clear();

        string ret = "{\"data\": " + data + "}";
        if (data == null)
        {
            Response.Write("0");
        }
        else
        {
            Response.Write(ret);
        }

        HttpContext.Current.Response.Flush();
        HttpContext.Current.Response.SuppressContent = true;
        HttpContext.Current.ApplicationInstance.CompleteRequest();
    }
    public void GetEmployeeDetails(string gEmpNo)
    {
        try
        {
            string connectionString = "";
            MySqlConnection con = new MySqlConnection(connectionString);
            con.Open();
            string query = "SELECT * FROM paint_tracker where emp_no_hang = '" + gEmpNo + "'";
            MySqlDataAdapter da = new MySqlDataAdapter(query, con);
            DataSet ds = new DataSet();
            ds.Clear();
            da.Fill(ds, "results");
            con.Close();
            PopulateEmployeeDetails(ds);
        }
        catch (Exception ex)
        {

        }

    }
    private void PopulateEmployeeDetails(DataSet ds)
    {
        subject[] arrReturn = subjectData.PopulateEmployeeDetails(ds);
        int arry_size = arrReturn.Length;
        for (int i = 0; i < arry_size; i++)
        {
            arrReturn[i].job_order_no = arrReturn[i].job_order_no.ToString();
            arrReturn[i].sequence_no = arrReturn[i].sequence_no.ToString();
            arrReturn[i].part_no = arrReturn[i].part_no.ToString();
            arrReturn[i].value_stream_id = arrReturn[i].value_stream_id.ToString();
            arrReturn[i].paint_color = arrReturn[i].paint_color.ToString();
            arrReturn[i].dt_hang = arrReturn[i].dt_hang.ToString();
            arrReturn[i].dt_takedown = arrReturn[i].dt_takedown.ToString();
            arrReturn[i].qty_good = arrReturn[i].qty_good.ToString();
            arrReturn[i].qty_rejected = arrReturn[i].qty_rejected.ToString();
        }
        string data = JsonConvert.SerializeObject(arrReturn);

        Response.Clear();

        string ret = "{\"data\": " + data + "}";
        if (data == null)
        {
            Response.Write("0");
        }
        else
        {
            Response.Write(ret);
        }

        HttpContext.Current.Response.Flush();
        HttpContext.Current.Response.SuppressContent = true;
        HttpContext.Current.ApplicationInstance.CompleteRequest();
    }

    public void Populate_supervisor()
    {
        string connectionString = "";
        try
        {
            MySqlConnection conn = new MySqlConnection(connectionString);
            
                //open connection to database
                conn.Open();
                string query = "SELECT DISTINCT u.assigned_supervisor_id, u1.username FROM fww_user u LEFT JOIN fww_user u1 ON (u.assigned_supervisor_id = u1.id) WHERE u1.username IS NOT NULL ";
                MySqlDataAdapter da = new MySqlDataAdapter(query, conn);
                da.Fill(this.supvsrDS, "supervisor_results");
                conn.Close();
                List<Supervisor_list> SupervisorList = new List<Supervisor_list>();
                string supervisor = "";
                List<Supervisor_list> supervisor_data = new List<Supervisor_list>();
                if (this.supvsrDS.Tables["supervisor_results"].Rows.Count > 0)
                {
                    foreach (DataRow row in this.supvsrDS.Tables["supervisor_results"].Rows)
                    {
                        string supervisor_id = row["assigned_supervisor_id"].ToString();
                        string username = row["username"].ToString();

                        SupervisorList.Add(new Supervisor_list
                        {
                            supervisor = supervisor_id,
                            username = username

                        });
                        supervisor_data = SupervisorList.ToList();
                        for (int s = 0; s < supervisor_data.Count; s++)
                        {

                            supervisor_data[s].supervisor = supervisor_data[s].supervisor.ToString();
                            supervisor_data[s].username = supervisor_data[s].username.ToString();

                        }
                    }
                }
                supervisor = JsonConvert.SerializeObject(supervisor_data);
                string ret = "{\"data\": " + supervisor + "}";
                if (supervisor == null)
                {
                    Response.Write("0");
                }
                else
                {
                    Response.Write(ret);
                }

                HttpContext.Current.Response.Flush();
                HttpContext.Current.Response.SuppressContent = true;
                HttpContext.Current.ApplicationInstance.CompleteRequest();
            
        }
        catch (Exception ex)
        {

        }
    }

}


