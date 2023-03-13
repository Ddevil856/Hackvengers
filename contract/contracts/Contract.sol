// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Contract {
    struct FIR 
    {
        uint256 FIR_NUMBER;
        string Date_of_Launch;
        string Name_of_Launcher;
        string District;
        string police_station_name;
        uint Police_Station_Code;
        string birth_date;
        string Date_of_Crime;
        string Place_of_Crime;
        string Description_of_Crime;
        string[] updates;
    }

    FIR[] private Fir_List;
    uint256 private FIR_NUMBER;

    constructor() {
        FIR_NUMBER = 0;
        // date
    }

    function raiseFIR(
        string memory date_of_launch,
        string memory name,
        string memory district,
        string memory police_station_name,
        uint police_station_code,
        string memory birth_date,
        string memory date_of_crime,
        string memory place_of_crime,
        string memory description
    ) public returns (uint256) {
        FIR_NUMBER++;
        Fir_List.push(
            FIR(
                FIR_NUMBER,
                date_of_launch,
                name,
                district,
                police_station_name,
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

    function allPoliceStationFIR(
        string memory police_station_name
    ) public view returns (FIR[] memory) {
        require(
            bytes(police_station_name).length > 0,
            "Please enter a Police Station Name"
        );

        uint256 count = 0;
        for (uint256 i = 0; i < Fir_List.length; i++) {
            if (
                keccak256(bytes(Fir_List[i].police_station_name)) ==
                keccak256(bytes(police_station_name))
            ) {
                count++;
            }
        }

        FIR[] memory result = new FIR[](count);
        uint256 j = 0;
        for (uint256 i = 0; i < Fir_List.length; i++) {
            if (
                keccak256(bytes(Fir_List[i].police_station_name)) ==
                keccak256(bytes(police_station_name))
            ) {
                result[j] = Fir_List[i];
                j++;
            }
        }

        return result;
    }
}
