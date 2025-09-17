import { Component, EventEmitter, Output, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-session',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-session.html',
  styleUrls: ['./create-session.scss'],
})
export class CreateSession {
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<{
    title: string;
    description: string;
    topic: string;
    durationMin: number;
    date: string;
    time: string;
    format: 'online' | 'offline';
  }>();

  topics = ['Leadership', 'Communication', 'Career', 'Productivity'];

  form;

  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(120)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      topic: [this.topics[0], Validators.required],
      durationMin: [30, [Validators.required, Validators.min(15), Validators.max(300)]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      format: ['online' as const, Validators.required],
    });
  }

  isValid = computed(() => this.form.valid);

  onSubmit() {
    if (this.form.invalid) return;
    this.save.emit(this.form.getRawValue());
  }

  onCancel() {
    this.cancel.emit();
  }
}
