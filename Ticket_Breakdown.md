# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Ticket #1
## CBH-1
AC 1: Create a pivot table for Facilities and Agents that have the following columns.
1. facility_id - integer
2. agent_id - integer
3. created_at - timestamp
3. updated_at - timestamp

## Ticket #2
## CBH-2
AC 1: Create a pivot table for Agents and Shifts that have the following columns.
1. agent_id - integer
2. shift_id - integer
3. created_at - timestamp
3. updated_at - timestamp

## Ticket #3
## CBH-3
## Problem Statement
As a company we would like to view reports containing how many hours each agent worked in a given quarter for each facility.

## Acceptance Criteria
The pivot tables are used to store the data and show the relationships in the different tables.
AC 1: With the use of the pivot table in Ticket - CBH-1 and - CBH-2 create a function that returns json data on each agent shift and their total number of hours worked each quarter. The data returned is:
- agents, facilities and summation of shift hours { agent : { facilities : { id, name } }, shifts: () total number of hours ) }
AC 2: Generate a PDF report to display the above data in a readable manner with the agent name as a heading.