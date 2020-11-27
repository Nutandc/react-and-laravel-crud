<?php

namespace App\Http\Controllers;

use App\Student;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class StudentController extends Controller
{
    private $student;


    public function __construct(Student $student)
    {
        $this->student = $student;

    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse|Response
     */
    public function index()
    {
        $students = $this->student->all();
        return response()->json(['students' => $students, 'status' => 200]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'address' => 'required|max:255',
            'phone' => 'required|max:255',
        ]);
        $student = $this->student->create($request->all());
        return response()->json([$student, 'status' => 200]);
    }

    /**
     * Display the specified resource.
     *
     * @param Student $student
     * @return Response
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Student $student
     * @return JsonResponse|Response
     */
    public function edit(Student $student)
    {
        return \response()->json(['student' => $student, 'status' => 200]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Student $student
     * @return Response
     */
    public function update(Request $request, Student $student)
    {
        $request->validate([
            'name' => 'required|max:255',
            'address' => 'required|max:255',
            'phone' => 'required|max:255',
        ]);
        $student = $student->update($request->all());
        return response()->json([$student, 'status' => 200, 'message' => 'student updated.']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Student $student
     * @return Response
     */
    public function destroy(Student $student)
    {
        $student = $student->delete();
        return response()->json([$student, 'status' => 200, 'message' => 'student deleted.']);
    }
}
