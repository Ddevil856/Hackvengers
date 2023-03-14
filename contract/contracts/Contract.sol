// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Contract {
    struct FIR {
        uint256 FIR_NUMBER;
        uint256 User_ID;
        uint256 Date_of_Launch;
        string Name_of_Launcher;
        string District;
        string Police_Station;
        int Police_Station_Code;
        string DOB;
        string Date_of_Crime;
        string Place_of_Crime;
        string Description_of_Crime;
        string[] updates;
    }

    struct Suspect {
        string Name_of_Suspect;
        uint256 age_of_Suspect;
    }

    FIR[] private Fir_List;
    uint256 private FIR_NUMBER;

    constructor() {
        FIR_NUMBER = 0;
    }

    function raiseFIR(
        uint256 dol,
        uint256 user_id,
        string memory name,
        string memory district,
        string memory police_station,
        int police_station_code,
        string memory birth_date,
        string memory date_of_crime,
        string memory place_of_crime,
        string memory description
       
    ) public returns (uint256) {
        FIR_NUMBER++;
        Fir_List.push(
            FIR(
                FIR_NUMBER,
                dol,
                user_id,
                name,
                district,
                police_station,
                police_station_code,
                birth_date,
                date_of_crime,
                place_of_crime,
                description,
                new string[](0)
            )
        );
        return FIR_NUMBER;
    }

    function retrieveFIR(
        uint256 fir_number
    ) public view returns (FIR memory a) {
        require(
            fir_number > 0 && fir_number <= Fir_List.length,
            "Invalid FIR Number"
        );
        return Fir_List[fir_number - 1];
    }

    function allPoliceStationFIR(int police_station_code) public view returns (FIR[] memory) 
    {
        require(police_station_code != 0, "Please enter a Police Station Code");

        uint256 count = 0;
        for (uint256 i = 0; i < Fir_List.length; i++) {
            if (Fir_List[i].Police_Station_Code == police_station_code) {
                count++;
            }
        }

        FIR[] memory result = new FIR[](count);
        uint256 j = 0;
        for (uint256 i = 0; i < Fir_List.length; i++) {
            if (Fir_List[i].Police_Station_Code == police_station_code) {
                result[j] = Fir_List[i];
                j++;
            }
        }

        return result;
    }

    function retrievebyuserid(uint256 user_id) public view returns (FIR[] memory) 
    {
    uint256 count = 0;
    
    for (uint256 i = 0; i < Fir_List.length; i++) 
    {
        if (Fir_List[i].User_ID == user_id) 
        {
            count++;
        }
    }

    FIR[] memory result = new FIR[](count);
    uint256 j = 0;

    for (uint256 i = 0; i < Fir_List.length; i++) 
    {
        if (Fir_List[i].User_ID == user_id) 
        {
            result[j] = Fir_List[i];
            j++;
        }
    }

    return result;
    }

}
