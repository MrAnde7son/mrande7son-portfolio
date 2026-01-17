import test from 'node:test'
import assert from 'node:assert/strict'
import { projects } from './projects'

test('projects include Atomic Red Team entry', () => {
  const projectTitles = projects.map((project) => project.title)
  assert.ok(projectTitles.includes('Atomic Red Team'))
})
