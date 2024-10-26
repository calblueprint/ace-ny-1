import requests
import pandas as pd
from io import BytesIO
import json
from utils.scraper_utils import clean_df_data
from database_constants import (
    renewable_energy_map,
    renewable_energy_set,
    initial_kdm_dict,
)


def query_nyiso_excel():
    nyiso = requests.get(
        "https://www.nyiso.com/documents/20142/1407078/NYISO-Interconnection-Queue.xlsx"
    )
    nyiso_data = nyiso.content
    all_sheets = pd.read_excel(BytesIO(nyiso_data), sheet_name=None)
    return all_sheets


def query_nyiso():
    nyiso = requests.get(
        "https://www.nyiso.com/documents/20142/1407078/NYISO-Interconnection-Queue.xlsx"
    )
    nyiso_data = nyiso.content
    nyiso_df = pd.read_excel(BytesIO(nyiso_data))

    nyiso_df = clean_df_data(nyiso_df)
    nyiso_list = nyiso_df.to_dict(orient="records")

    filtered_list = []
    for item in nyiso_list:
        if item.get("Type/ Fuel", None) not in renewable_energy_map.keys():
            continue
        project_dict = {
            "project_name": item.get("Project Name", None),
            "project_status": "Proposed",  # TODO: update this based on which sheet it's from
            "renewable_energy_technology": renewable_energy_map[
                item.get("Type/ Fuel")
            ],  # map abbreviations into readable string
            "size": item.get("SP (MW)", None),
            "developer": item.get("Developer Name", None),
            "proposed_cod": item.get(
                "Proposed COD", None
            ),  # note: non-serializable into JSON --> can't directly write to file
            "county": item.get("County", None),
            "region": None,  # missing
            "zipcode": None,  # missing
            "latitude": None,
            "longitude": None,
            # 'data_through_date': item.get('Last Updated Date', None),
            "key_development_milestones": None,
            "project_image": None,
            "interconnection_queue_number": item.get("Queue Pos.", None),
            "approved": False,
            # the following fields are used for updating kdms when updating the database
            "date_of_ir": item.get("Date of IR", None),  # already a datetime object
            "ia_tender_date": item.get("IA Tender Date", None),
        }
        filtered_list.append(project_dict)

    return filtered_list


# print(query_nyiso())


def write_nyiso_to_json():
    data = query_nyiso()
    # print(data)
    with open("api/webscraper/nyiso.json", "w") as file:
        json.dump(data, file, indent=4)
        file.write("\n")


"""
For testing
"""
# write_nyiso_to_json()


def filter_nyiso_list(project_list, sheet_name):
    filtered_list = []
    if sheet_name == "In Service":
        project_status = "Operational"
    else:
        project_status = "Proposed"
    for item in project_list:
        if item.get("Type/ Fuel", None) not in renewable_energy_map.keys():
            continue
        project_dict = {
            "project_name": item.get("Project Name", None),
            "project_status": project_status,
            "renewable_energy_technology": renewable_energy_map[
                item.get("Type/ Fuel")
            ],  # map abbreviations into readable string
            "size": item.get("SP (MW)", None),
            "developer": item.get("Developer Name", None),
            "proposed_cod": item.get(
                "Proposed COD", None
            ),  # note: non-serializable into JSON --> can't directly write to file
            "county": item.get("County", None),
            "region": None,  # missing
            "zipcode": None,  # missing
            "latitude": None,
            "longitude": None,
            # 'data_through_date': item.get('Last Updated Date', None),
            "key_development_milestones": None,
            "project_image": None,
            "interconnection_queue_number": item.get("Queue Pos.", None),
            "approved": False,
            # the following fields are used for updating kdms when updating the database
            "date_of_ir": item.get("Date of IR", None),  # datetime object
            "ia_tender_date": item.get("IA Tender Date", None),  # timestamp object
        }
        if sheet_name == "In Service":
            project_dict["developer"] = item.get("Owner/Developer", None)
        filtered_list.append(project_dict)

    return filtered_list


def filter_nyiso_iq_sheet():
    all_sheets = query_nyiso_excel()
    sheet_names = list(all_sheets.keys())
    iq_key = sheet_names[0]

    iq_df = all_sheets[iq_key]  # Interconnection Queue
    iq_df = clean_df_data(iq_df)
    iq_list = iq_df.to_dict(orient="records")
    filtered_list = filter_nyiso_list(iq_list, "Interconnection Queue")
    return filtered_list


def filter_nyiso_cluster_sheet():
    all_sheets = query_nyiso_excel()
    sheet_names = list(all_sheets.keys())
    print(sheet_names[1])
    print(all_sheets[sheet_names[1]])
    cluster_projects_key = sheet_names[1]

    cluster_projects_df = all_sheets[cluster_projects_key]  # Cluster Projects
    cluster_projects_df = clean_df_data(cluster_projects_df)
    cluster_projects_list = cluster_projects_df.to_dict(orient="records")
    filtered_list = filter_nyiso_list(cluster_projects_list, "Cluster Project")
    return filtered_list


def filter_nyiso_in_service_sheet():
    all_sheets = query_nyiso_excel()
    sheet_names = list(all_sheets.keys())
    in_service_key = sheet_names[-1]

    in_service_df = all_sheets[in_service_key]  # In Service
    in_service_df = clean_df_data(in_service_df)
    in_service_dict = in_service_df.to_dict(orient="records")
    filtered_list = filter_nyiso_list(in_service_dict, "In Service")
    return filtered_list


# filter_nyiso_cluster_sheet()

print(filter_nyiso_cluster_sheet()[-10:])
