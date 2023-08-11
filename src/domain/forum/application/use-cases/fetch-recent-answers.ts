import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'

interface FetchRecentQuestionsAnswersUseCaseRequest {
  questionId: string
  page: number
}

interface FetchRecentQuestionsAnswersUseCaseResponse {
  answers: Answer[]
}

export class FetchRecentQuestionsAnswersUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    questionId,
    page,
  }: FetchRecentQuestionsAnswersUseCaseRequest): Promise<FetchRecentQuestionsAnswersUseCaseResponse> {
    const answers = await this.answersRepository.findManyByQuestionId(
      questionId,
      {
        page,
      },
    )

    return {
      answers,
    }
  }
}
