<?php

namespace App\Policies;

use App\Models\Subject;
use App\Models\User;
use Illuminate\Auth\Access\Response;
use Illuminate\Support\Facades\Auth;

class SubjectPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Subject $subject): bool
    {
        return $subject->user()->is($user);
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->type === 'admin';
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Subject $subject): bool
    {
        return $user->type === 'admin';
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Subject $subject): bool
    {
        return $user->type === 'admin';
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Subject $subject): bool
    {
        return $user->type === 'admin';
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Subject $subject): bool
    {
        return $user->type === 'admin';
    }
}
