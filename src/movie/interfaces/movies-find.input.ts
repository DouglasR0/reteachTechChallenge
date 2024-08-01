import { PaginationInput } from '../../common/input/pagination.input'
import { IsOptional } from 'class-validator'

export class MoviesFindInput extends PaginationInput {
    @IsOptional()
    searchTerm?: string
}
