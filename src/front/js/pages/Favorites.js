import React from "react";

export const Favorites = () => {
    return (
        <div className="container favoritesDiv">
            <table className="favTable">
                <th className="favTable">
                    <td>Restaurant Name</td>
                    <td>Restaurant Address</td>
                    <td>Restaurant Web address</td>
                    <td>Restaurant City</td>
                </th>
                {/* <tr>{restaurant.name}</tr>
                <tr>{restaurant.name}</tr>
                <tr>{restaurant.name}</tr>
                <tr>{restaurant.name}</tr> */}
            </table>
        </div>
    )
};